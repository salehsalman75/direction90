"use client";

import { useEffect } from "react";

export default function SuccessPage() {
useEffect(() => {
const run = async () => {
try {
const params = new URLSearchParams(window.location.search);
const email = params.get("email")?.trim().toLowerCase() || "";

if (!email) {
window.location.replace("/checkout");
return;
}

localStorage.setItem("direction90_email", email);

document.cookie =
"direction90_access=true; path=/; max-age=86400; samesite=lax";

await fetch("/api/payment-success", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ email }),
});

window.location.replace("/assessment");
} catch (error) {
console.error("Success redirect error:", error);
window.location.replace("/checkout");
}
};

run();
}, []);

return (
<main className="min-h-screen bg-white text-gray-950">
<section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-20">
<div className="w-full rounded-[2rem] border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
Direction90
</p>

<h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
Payment successful
</h1>

<p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
Your payment was received successfully.
</p>

<p className="mt-2 text-base leading-8 text-gray-600 sm:text-lg">
Redirecting you to the assessment...
</p>
</div>
</section>
</main>
);
}








