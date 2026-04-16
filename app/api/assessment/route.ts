import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

type AssessmentPayload = {
name?: string;
email?: string;
paymentEmail?: string;
answers?: Record<string, string>;
submittedAt?: string;
};

export async function POST(req: Request) {
try {
const body = (await req.json()) as AssessmentPayload;

const name = String(body?.name || "").trim();
const email = String(body?.email || "").trim().toLowerCase();
const paymentEmail = String(body?.paymentEmail || "")
.trim()
.toLowerCase();
const answers = body?.answers || {};
const submittedAt = body?.submittedAt || new Date().toISOString();

if (!name || !email || !paymentEmail || Object.keys(answers).length === 0) {
return NextResponse.json(
{ error: "Missing required assessment fields." },
{ status: 400 }
);
}

const { data: paymentRows, error: paymentCheckError } = await supabaseAdmin
.from("payments")
.select("id")
.eq("email", paymentEmail)
.eq("status", "paid")
.limit(1);

if (paymentCheckError) {
console.error("Payment verification error:", paymentCheckError);
return NextResponse.json(
{ error: "Failed to verify payment access." },
{ status: 500 }
);
}

if (!paymentRows || paymentRows.length === 0) {
return NextResponse.json(
{ error: "No paid access found for this payment email." },
{ status: 403 }
);
}

const { error: customerError } = await supabaseAdmin
.from("customers")
.upsert([{ email }], { onConflict: "email" });

if (customerError) {
console.error("Customer upsert error:", customerError);
return NextResponse.json(
{ error: "Failed to save customer." },
{ status: 500 }
);
}

const assessmentInsert = await supabaseAdmin
.from("assessments")
.insert([
{
email,
answers,
status: "submitted",
created_at: submittedAt,
},
])
.select("id")
.single();

if (assessmentInsert.error) {
console.error("Assessment insert error:", assessmentInsert.error);
return NextResponse.json(
{ error: "Failed to save assessment." },
{ status: 500 }
);
}

const assessmentId = assessmentInsert.data.id;

const { error: reportError } = await supabaseAdmin.from("reports").insert([
{
email,
status: "pending",
},
]);

if (reportError) {
console.error("Report insert error:", reportError);
return NextResponse.json(
{ error: "Failed to initialize report record." },
{ status: 500 }
);
}

const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;

if (!makeWebhookUrl) {
return NextResponse.json(
{ error: "MAKE_WEBHOOK_URL is missing in environment variables." },
{ status: 500 }
);
}

const makePayload = {
name,
email,
answers,
assessmentId,
paymentEmail,
submittedAt,
};

const makeResponse = await fetch(makeWebhookUrl, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(makePayload),
});

if (!makeResponse.ok) {
const makeErrorText = await makeResponse.text().catch(() => "");
console.error("Make webhook failed:", makeErrorText);

return NextResponse.json(
{ error: "Failed to send assessment to automation flow." },
{ status: 500 }
);
}

return NextResponse.json({
success: true,
assessmentId,
});
} catch (error) {
console.error("assessment route error:", error);
return NextResponse.json(
{ error: "Server error while submitting assessment." },
{ status: 500 }
);
}
}

