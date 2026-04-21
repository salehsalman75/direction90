import Link from "next/link";

export default function HomePage() {
return (
<main className="min-h-screen bg-white text-gray-950">
{/* HEADER */}
<header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-950 to-gray-700 shadow-[0_10px_30px_rgba(15,23,42,0.16)]">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
<path
d="M5 19L19 5M19 5H9M19 5V15"
stroke="white"
strokeWidth="2.4"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
</div>

<div className="flex flex-col leading-none">
<span className="text-[18px] font-semibold tracking-tight text-gray-950">
Direction90
</span>
<span className="mt-[3px] text-[10px] uppercase tracking-[0.34em] text-gray-400">
STRUCTURED CLARITY
</span>
</div>
</div>

<Link
href="/checkout"
className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-neutral-800"
>
Start — $19
</Link>
</div>
</header>

{/* HERO */}
<section className="px-6 pb-24 pt-20 sm:pb-28 sm:pt-24">
<div className="mx-auto max-w-6xl">
<div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
<div className="max-w-3xl">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-gray-400">
Direction90
</p>

<h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-tight text-gray-950 sm:text-6xl">
You don’t know if your role is working.
<br className="hidden sm:block" />
This shows you what it’s actually doing.
</h1>

<p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
Direction90 turns your submitted responses into a structured read
of your current situation, so you can see whether your role is
creating leverage, friction, stagnation, or misalignment.
</p>

<p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
No vague coaching. No open-ended calls. No human consulting.
Just a structured digital output built from your own signals.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
<Link
href="/checkout"
className="inline-flex items-center justify-center rounded-full bg-gray-950 px-8 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-gray-800"
>
Start Your Assessment — $19
</Link>
</div>

<div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
<span>Private</span>
<span>Structured</span>
<span>Built from your inputs</span>
<span>Delivered online</span>
</div>
</div>

<div className="rounded-[2rem] border border-gray-200/80 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-8">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-400">
What you get
</p>

<div className="mt-8 space-y-6">
<div className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
<h2 className="text-lg font-semibold text-gray-950">
A structured report
</h2>
<p className="mt-2 text-sm leading-7 text-gray-600">
A formatted output generated from the information you submit
in your responses.
</p>
</div>

<div className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
<h2 className="text-lg font-semibold text-gray-950">
Clear pattern visibility
</h2>
<p className="mt-2 text-sm leading-7 text-gray-600">
The report organizes your signals into a clearer view of
what may actually be happening in your current situation.
</p>
</div>

<div>
<h2 className="text-lg font-semibold text-gray-950">
Structured output
</h2>
<p className="mt-2 text-sm leading-7 text-gray-600">
You receive organized sections, signal summaries, and
generated output based on your submitted inputs.
</p>
</div>
</div>
</div>
</div>

<div className="mt-24 grid gap-6 md:grid-cols-3">
<div className="rounded-[2rem] border border-gray-200/80 bg-white p-7">
<p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
For people who
</p>
<p className="mt-4 text-lg leading-8 text-gray-800">
want a more structured way to review a work situation that feels
unclear, stuck, or difficult to interpret.
</p>
</div>

<div className="rounded-[2rem] border border-gray-200/80 bg-white p-7">
<p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
For situations where
</p>
<p className="mt-4 text-lg leading-8 text-gray-800">
the role is not obviously broken, but it is also not easy to
tell whether it is creating leverage, stagnation, or friction.
</p>
</div>

<div className="rounded-[2rem] border border-gray-200/80 bg-white p-7">
<p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
For buyers who want
</p>
<p className="mt-4 text-lg leading-8 text-gray-800">
a structured report that organizes their submitted responses
into a clearer perspective, not an open-ended coaching
engagement.
</p>
</div>
</div>
</div>
</section>

{/* PAIN */}
<section className="border-t border-gray-200/80 px-6 py-24">
<div className="mx-auto max-w-4xl">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-gray-400">
You might already feel it
</p>

<h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
The hardest situations are not clearly bad.
<br className="hidden sm:block" />
They just feel off.
</h2>

<div className="mt-10 space-y-5 text-lg leading-8 text-gray-600">
<p>• The role looks fine, but doesn’t feel right.</p>
<p>• You are not sure if you are progressing or just staying busy.</p>
<p>• You can’t tell if the issue is temporary or structural.</p>
<p>• Something feels wrong, but you can’t explain it clearly.</p>
</div>
</div>
</section>

{/* WHY THIS EXISTS */}
<section className="border-t border-gray-200/80 px-6 py-24">
<div className="mx-auto max-w-5xl">
<div className="max-w-3xl">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-gray-400">
Why this exists
</p>

<h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
It is hard to evaluate your own situation
<br className="hidden sm:block" />
when everything feels mixed.
</h2>

<div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
<p>Sometimes a role looks fine on paper but unclear in practice.</p>
<p>Sometimes the issue is temporary. Sometimes it is structural.</p>
<p>
Direction90 is designed as a structured online product that
helps surface those patterns from your own submitted responses.
</p>
<p>
It does not replace professional, legal, financial, medical, or
mental health advice.
</p>
</div>
</div>
</div>
</section>

{/* WHAT THIS IS NOT */}
<section className="border-t border-gray-200/80 px-6 py-24">
<div className="mx-auto max-w-4xl">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-gray-400">
What this is not
</p>

<h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
This is not coaching.
</h2>

<div className="mt-8 space-y-4 text-lg leading-8 text-gray-600">
<p>• No calls</p>
<p>• No vague advice</p>
<p>• No human consulting</p>
<p>• No generic motivational content</p>
</div>

<p className="mt-8 text-lg font-medium leading-8 text-gray-900">
It is a structured read of your situation, built from your own
inputs.
</p>
</div>
</section>

{/* HOW IT WORKS */}
<section className="border-t border-gray-200/80 px-6 py-24">
<div className="mx-auto max-w-5xl">
<div className="grid gap-12 lg:grid-cols-2">
<div>
<p className="text-sm font-medium uppercase tracking-[0.28em] text-gray-400">
How it works
</p>
<h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
A simple online flow.
<br />
A structured output.
</h2>
</div>

<div className="space-y-8">
<div className="border-b border-gray-100 pb-8">
<p className="text-sm font-medium text-gray-400">01</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
You purchase access
</h3>
<p className="mt-2 leading-8 text-gray-600">
Start with checkout to unlock the full Direction90 response
flow.
</p>
</div>

<div className="border-b border-gray-100 pb-8">
<p className="text-sm font-medium text-gray-400">02</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
You complete the questionnaire
</h3>
<p className="mt-2 leading-8 text-gray-600">
You provide your responses about your current role, signals,
concerns, expectations, and likely near-term outlook.
</p>
</div>

<div className="border-b border-gray-100 pb-8">
<p className="text-sm font-medium text-gray-400">03</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
Your report is generated
</h3>
<p className="mt-2 leading-8 text-gray-600">
Direction90 uses your submitted inputs to generate a
structured report.
</p>
</div>

<div className="border-b border-gray-100 pb-8">
<p className="text-sm font-medium text-gray-400">04</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
You receive the output
</h3>
<p className="mt-2 leading-8 text-gray-600">
The final output is delivered as an online report after
completion.
</p>
</div>

<div>
<p className="text-sm font-medium text-gray-400">05</p>
<h3 className="mt-2 text-xl font-semibold text-gray-950">
You review it privately
</h3>
<p className="mt-2 leading-8 text-gray-600">
The product is intended for personal informational use and
self-review.
</p>
</div>
</div>
</div>
</div>
</section>

{/* REPORT INCLUDES */}
<section className="border-t border-gray-200/80 px-6 py-24">
<div className="mx-auto max-w-5xl">
<div className="rounded-[2.5rem] bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 px-8 py-10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.24)] sm:px-12 sm:py-14">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-white/60">
What the report includes
</p>

<div className="mt-8 grid gap-6 md:grid-cols-2">
<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<h3 className="text-lg font-semibold">Headline</h3>
<p className="mt-2 text-sm leading-7 text-white/75">
A generated framing of the situation based on your submitted
responses.
</p>
</div>

<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<h3 className="text-lg font-semibold">Summary</h3>
<p className="mt-2 text-sm leading-7 text-white/75">
A structured explanation of possible patterns reflected in
your inputs.
</p>
</div>

<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<h3 className="text-lg font-semibold">Signal breakdown</h3>
<p className="mt-2 text-sm leading-7 text-white/75">
Organized sections that show how your submitted responses
relate to the generated report.
</p>
</div>

<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
<h3 className="text-lg font-semibold">Online delivery</h3>
<p className="mt-2 text-sm leading-7 text-white/75">
A report generated after completion and delivered
electronically.
</p>
</div>
</div>

<p className="mt-8 text-sm leading-7 text-white/75">
Direction90 is an informational online product. It does not
provide human consulting, coaching, therapy, legal advice,
financial advice, medical advice, or guaranteed outcomes.
</p>

<p className="mt-4 text-sm leading-7 text-white/75">
Results are generated based on your inputs and are not guaranteed
to be accurate or applicable to your situation.
</p>
</div>
</div>
</section>

{/* FINAL CTA */}
<section className="border-t border-gray-200/80 px-6 py-24">
<div className="mx-auto max-w-4xl text-center">
<p className="text-sm font-medium uppercase tracking-[0.28em] text-gray-400">
Final call
</p>

<h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
Start Direction90 if you want
<br className="hidden sm:block" />a clearer read of your situation.
</h2>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
You will complete the questionnaire first, then receive a generated
report based on your submitted responses.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
<Link
href="/checkout"
className="inline-flex items-center justify-center rounded-full bg-gray-950 px-8 py-4 text-base font-semibold text-white shadow-[0_16px_36px_rgba(15,23,42,0.16)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-gray-800"
>
Start Your Assessment — $19
</Link>
</div>

<p className="mt-5 text-sm text-gray-500">
Informational online product only. Not professional advice.
</p>

<p className="mt-3 text-sm text-gray-500">
Refunds are handled according to our refund policy.
</p>
</div>
</section>
</main>
);
}




