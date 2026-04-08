import { NextResponse } from "next/server";

export async function POST(req: Request) {
try {
const body = await req.json();

const { name, email, answers, submittedAt } = body;

if (!name || !email || !answers) {
return NextResponse.json(
{ error: "Missing required fields" },
{ status: 400 }
);
}

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

if (!MAKE_WEBHOOK_URL) {
return NextResponse.json(
{ error: "Webhook URL not configured" },
{ status: 500 }
);
}

const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
name,
email,
answers,
submittedAt,
source: "direction90-assessment",
}),
});

if (!makeResponse.ok) {
const text = await makeResponse.text();
console.error("Make webhook error:", text);

return NextResponse.json(
{ error: "Failed to send data to automation" },
{ status: 500 }
);
}

return NextResponse.json({ success: true });
} catch (error) {
console.error("API error:", error);

return NextResponse.json(
{ error: "Internal server error" },
{ status: 500 }
);
}
}
