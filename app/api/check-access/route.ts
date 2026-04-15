import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
try {
const body = await req.json();
const email = String(body?.email || "").trim().toLowerCase();

if (!email) {
return NextResponse.json({ paid: false }, { status: 200 });
}

const { data, error } = await supabaseAdmin
.from("payments")
.select("id")
.eq("email", email)
.eq("status", "paid")
.limit(1);

if (error) {
console.error("check-access error:", error);
return NextResponse.json({ paid: false }, { status: 500 });
}

return NextResponse.json({
paid: Array.isArray(data) && data.length > 0,
});
} catch (error) {
console.error("check-access server error:", error);
return NextResponse.json({ paid: false }, { status: 500 });
}
}
