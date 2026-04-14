import { NextResponse } from "next/server";

// مؤقت: mock database
const paidUsers = new Set<string>();

// نضيف user (هذا لاحقًا webhook راح يسويه)
paidUsers.add("test@example.com");

export async function GET(req: Request) {
const { searchParams } = new URL(req.url);
const email = searchParams.get("email");

if (!email) {
return NextResponse.json({ paid: false });
}

const isPaid = paidUsers.has(email);

return NextResponse.json({ paid: isPaid });
}


