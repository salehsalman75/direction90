import Link from "next/link";

export default function HomePage() {
return (
<main className="min-h-screen bg-white text-gray-950">
<section className="px-6 pt-24 pb-20">
<div className="mx-auto max-w-6xl">
<div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
<div className="max-w-3xl">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
Direction90
</p>

<h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] sm:text-6xl">
You’re not confused.
<br className="hidden sm:block" />
You’re in a system that isn’t building your future.
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
Direction90 shows whether your current role is building leverage
— or quietly costing you time.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
<Link
href="/checkout"
className="inline-flex items-center justify-center rounded-2xl bg-gray-950 px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-800"
>
Get Your Direction90 — $19
</Link>
</div>

<div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
<span>Private</span>
<span>Structured</span>
<span>No generic advice</span>
<span>Built for real decisions</span>
</div>
</div>

<div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
<p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
What you get
</p>

<div className="mt-6 space-y-5">
<div className="rounded-2xl bg-white p-5">
<h2 className="text-base font-semibold text-gray-950">
A sharp direction
</h2>
<p className="mt-2 text-sm leading-7 text-gray-600">
Not “it depends.” You get a clear read: stabilize,
reposition, or exit.
</p>
</div>

<div className="rounded-2xl bg-white p-5">
<h2 className="text-base font-semibold text-gray-950">
The real mechanism
</h2>
<p className="mt-2 text-sm leading-7 text-gray-600">
The report explains what is structurally happening beneath
your confusion, frustration, or hesitation.
</p>
</div>

<div className="rounded-2xl bg-white p-5">
<h2 className="text-base font-semibold text-gray-950">
Concrete next moves
</h2>
<p className="mt-2 text-sm leading-7 text-gray-600">
You leave with decision-grade phases, not vague “reflect,
update, network” career advice.
</p>
</div>
</div>
</div>
</div>

<div className="mt-24 grid gap-6 md:grid-cols-3">
<div className="rounded-3xl border border-gray-200 p-7">
<p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
For people who
</p>
<p className="mt-4 text-lg leading-8 text-gray-800">
are doing “fine” on paper, but privately feel something is off.
</p>
</div>

<div className="rounded-3xl border border-gray-200 p-7">
<p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
For situations where
</p>
<p className="mt-4 text-lg leading-8 text-gray-800">
the role is not obviously broken, but it is not clearly building
your future either.
</p>
</div>

<div className="rounded-3xl border border-gray-200 p-7">
<p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
For decisions like
</p>
<p className="mt-4 text-lg leading-8 text-gray-800">
stay, leave, reposition, wait, push internally, or stop wasting
time.
</p>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-200 px-6 py-20">
<div className="mx-auto max-w-5xl">
<div className="max-w-3xl">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
Why this exists
</p>

<h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
Most career advice helps you think more.
<br className="hidden sm:block" />
It does not help you decide.
</h2>

<div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
<p>
You can be capable, hard-working, and respected — and still be
in the wrong environment.
</p>
<p>
You can also be uncomfortable without actually needing to leave.
</p>
<p>
The problem is that most people cannot tell the difference
between a temporary dip, a structural ceiling, and fear.
</p>
<p>
Direction90 is built to make that difference visible.
</p>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-200 px-6 py-20">
<div className="mx-auto max-w-5xl">
<div className="grid gap-12 lg:grid-cols-2">
<div>
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
How it works
</p>
<h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
A simple process.
<br />
A sharper outcome.
</h2>
</div>

<div className="space-y-8">
<div>
<p className="text-sm font-medium text-gray-400">01</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
You purchase your report
</h3>
<p className="mt-2 text-gray-600 leading-8">
Start with checkout to unlock the full Direction90 flow.
</p>
</div>

<div>
<p className="text-sm font-medium text-gray-400">02</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
You answer the assessment
</h3>
<p className="mt-2 text-gray-600 leading-8">
You describe your situation, signals, fears, expectations, and
likely next six months.
</p>
</div>

<div>
<p className="text-sm font-medium text-gray-400">03</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
Direction90 reads the real pattern
</h3>
<p className="mt-2 text-gray-600 leading-8">
Not just what you feel — what your situation is actually
producing.
</p>
</div>

<div>
<p className="text-sm font-medium text-gray-400">04</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
You get your report
</h3>
<p className="mt-2 text-gray-600 leading-8">
A confrontational headline, clear direction, key signals, and
decision-grade next phases.
</p>
</div>

<div>
<p className="text-sm font-medium text-gray-400">05</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
You stop drifting
</h3>
<p className="mt-2 text-gray-600 leading-8">
The point is not insight for its own sake. The point is moving
with clarity.
</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-200 px-6 py-20">
<div className="mx-auto max-w-5xl">
<div className="rounded-[2rem] bg-gray-950 px-8 py-10 text-white sm:px-12 sm:py-14">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-white/60">
What the report includes
</p>

<div className="mt-8 grid gap-6 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold">Headline</h3>
<p className="mt-2 text-sm leading-7 text-white/75">
A sharp reframing of what is actually happening.
</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold">Direction</h3>
<p className="mt-2 text-sm leading-7 text-white/75">
Stabilization, reposition, or exit — with confidence, not
hedging.
</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold">Summary</h3>
<p className="mt-2 text-sm leading-7 text-white/75">
The mechanism beneath the situation, without generic career
language.
</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold">Phases</h3>
<p className="mt-2 text-sm leading-7 text-white/75">
Specific moves that create clarity, commitment, or a real
decision boundary.
</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-200 px-6 py-20">
<div className="mx-auto max-w-4xl text-center">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
Final call
</p>

<h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
If something already feels off,
<br className="hidden sm:block" />
waiting usually does not make it clearer.
</h2>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
It usually just makes you more adapted to the wrong situation.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
<Link
href="/checkout"
className="inline-flex items-center justify-center rounded-2xl bg-gray-950 px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.01] hover:bg-gray-800"
>
Get Your Direction90 — $19
</Link>
</div>

<p className="mt-5 text-sm text-gray-500">
Informational only. Not professional advice.
</p>
</div>
</section>
</main>
);
}

