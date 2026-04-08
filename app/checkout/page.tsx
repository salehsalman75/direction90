"use client";

import { useRouter } from "next/navigation";

export default function CheckoutPage() {
const router = useRouter();

const handleUnlock = () => {
document.cookie = "direction90_access=granted; path=/; max-age=86400";
router.push("/assessment");
};

return (
<main className="min-h-screen bg-white px-6 pt-28 pb-20 text-gray-900">
<div className="mx-auto max-w-xl text-center">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
Direction90
</p>

<h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
You already feel something is off.
</h1>

<p className="mt-4 text-lg leading-relaxed text-gray-600">
This gives you a clear read on what&apos;s actually happening in your
situation — and what your next move should be.
</p>

<div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
<p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
One-time payment
</p>

<p className="mt-3 text-4xl font-semibold">$19</p>

<p className="mt-2 text-sm text-gray-500">
Instant access after payment.
</p>

<div className="mt-8">
<button
type="button"
onClick={handleUnlock}
className="inline-flex w-full items-center justify-center rounded-2xl bg-gray-950 px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-800"
>
Unlock your Direction90 — $19
</button>
</div>

<p className="mt-4 text-sm text-gray-500">
Private. Thoughtful. Built for real decisions.
</p>

<div className="mt-10 text-left">
<h2 className="text-lg font-semibold text-gray-900">What you’ll get</h2>

<ul className="mt-4 space-y-3 text-gray-600">
<li>— A clear direction: stay, reposition, or exit</li>
<li>— A sharp explanation of what is actually going wrong</li>
<li>— The real constraint behind your situation</li>
<li>— Forced next moves instead of generic advice</li>
<li>— A decision path you can actually act on</li>
</ul>
</div>
</div>
</div>
</main>
);
}
