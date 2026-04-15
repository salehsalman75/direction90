import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
try {
const { email } = await req.json();

if (!email) {
return NextResponse.json({ error: "Missing email" }, { status: 400 });
}

const normalizedEmail = String(email).trim().toLowerCase();

const { error: customerError } = await supabase.from("customers").upsert(
[{ email: normalizedEmail }],
{ onConflict: "email" }
);

if (customerError) {
console.error("Customer upsert error:", customerError);
return NextResponse.json({ error: "Failed to save customer" }, { status: 500 });
}

const { error: paymentError } = await supabase.from("payments").insert([
{
email: normalizedEmail,
status: "paid",
},
]);

if (paymentError) {
console.error("Payment insert error:", paymentError);
return NextResponse.json({ error: "Failed to save payment" }, { status: 500 });
}

return NextResponse.json({ success: true });
} catch (error) {
console.error("payment-success error:", error);
return NextResponse.json({ error: "Server error" }, { status: 500 });
}
}


