import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
try {
const body = await req.json();
const email = String(body?.email || "").trim().toLowerCase();

if (!email) {
return NextResponse.json({ error: "Missing email" }, { status: 400 });
}

const { error: customerError } = await supabaseAdmin
.from("customers")
.upsert([{ email }], { onConflict: "email" });

if (customerError) {
console.error("Customer upsert error:", customerError);
return NextResponse.json(
{ error: "Failed to save customer" },
{ status: 500 }
);
}

const { error: paymentError } = await supabaseAdmin.from("payments").insert([
{
email,
status: "paid",
},
]);

if (paymentError) {
console.error("Payment insert error:", paymentError);
return NextResponse.json(
{ error: "Failed to save payment" },
{ status: 500 }
);
}

return NextResponse.json({ success: true });
} catch (error) {
console.error("payment-success error:", error);
return NextResponse.json({ error: "Server error" }, { status: 500 });
}
}



