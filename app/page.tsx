import Link from "next/link";

export default function HomePage() {
return (
<main className="min-h-screen bg-white px-6 pt-28 pb-20 text-gray-900">
<div className="mx-auto max-w-xl text-center">

{/* Headline */}
<h1 className="text-4xl font-semibold tracking-tight leading-tight">
Not sure if you should stay,
<br />
leave, or reposition?
</h1>

<p className="mt-4 text-lg text-gray-600 leading-relaxed">
You already feel something is off.
<br />
This will help you understand what to do next.
</p>

{/* CTA */}
<div className="mt-8 flex justify-center">
<Link href="/checkout">
<button className="rounded-2xl bg-gray-950 px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800">
Get Your Direction90 — $19
</button>
</Link>
</div>

{/* Trust */}
<p className="mt-4 text-sm text-gray-500">
Private. Thoughtful. Built for real decisions.
</p>

{/* Section */}
<div className="mt-20 text-left">
<h2 className="text-xl font-semibold text-gray-900">
Most career advice doesn’t actually help you decide.
</h2>

<p className="mt-4 text-gray-600 leading-relaxed">
You can be working hard, doing well, and still feel stuck.
Not because you lack motivation — but because you lack clarity.
</p>

<p className="mt-4 text-gray-600 leading-relaxed">
When everything looks “fine” on the outside, it’s harder to know
if you should stay… or walk away.
</p>

<p className="mt-4 text-gray-600 leading-relaxed">
Direction90 helps you see that clearly.
</p>
</div>

{/* How it works */}
<div className="mt-20 text-left">
<h2 className="text-xl font-semibold text-gray-900">
How Direction90 works
</h2>

<div className="mt-6 space-y-4 text-gray-600">
<p>01 — See your situation clearly</p>
<p>02 — Understand what’s actually wrong</p>
<p>03 — Know your best next move</p>
<p>04 — Move forward with confidence</p>
</div>
</div>

{/* Final CTA */}
<div className="mt-20 text-center">
<h2 className="text-2xl font-semibold text-gray-900">
You already feel something is off.
</h2>

<p className="mt-4 text-gray-600">
This will tell you what to do next.
</p>

<div className="mt-8 flex justify-center">
<Link href="/checkout">
<button className="rounded-2xl bg-gray-950 px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800">
Get Your Direction90 — $19
</button>
</Link>
</div>
</div>

</div>
</main>
);
}




