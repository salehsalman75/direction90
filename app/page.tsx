import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
return (
<main className="min-h-screen bg-white text-gray-950">
{/* LOGO */}
<div className="mx-auto max-w-6xl px-6 pt-6">
<Image
src="/logo.svg"
alt="Direction90"
width={44}
height={44}
priority
className="h-11 w-auto"
/>
</div>

{/* HERO */}
<section className="px-6 pt-16 pb-20">
<div className="mx-auto max-w-6xl">
<div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
<div className="max-w-3xl">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
Direction90
</p>

<h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
You are not buying advice.
<br className="hidden sm:block" />
You are buying a structured read.
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
Direction90 organizes your submitted responses into a structured
report that helps you see what your current role may be producing,
where friction may be coming from, and what signals may matter most right now.
</p>

<div className="mt-10">
<Link
href="/checkout"
className="inline-flex items-center justify-center rounded-2xl bg-gray-950 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800"
>
Get Your Direction90 — $19
</Link>
</div>

<div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
<span>Private</span>
<span>Structured</span>
<span>Built from your inputs</span>
<span>Delivered online</span>
</div>
</div>

{/* RIGHT CARD */}
<div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
<p className="text-sm uppercase text-gray-500">What you get</p>

<div className="mt-6 space-y-4">
<div className="rounded-2xl bg-white p-5">
<h2 className="font-semibold">A structured report</h2>
<p className="text-sm text-gray-600">
Generated from your responses.
</p>
</div>

<div className="rounded-2xl bg-white p-5">
<h2 className="font-semibold">Clear pattern visibility</h2>
<p className="text-sm text-gray-600">
Understand what's really happening.
</p>
</div>

<div className="rounded-2xl bg-white p-5">
<h2 className="font-semibold">Structured output</h2>
<p className="text-sm text-gray-600">
Organized, readable, actionable.
</p>
</div>
</div>
</div>
</div>

{/* GRID */}
<div className="mt-20 grid gap-6 md:grid-cols-3">
<div className="rounded-3xl border p-6">
<p className="text-sm text-gray-500">For people who</p>
<p className="mt-2">
feel stuck, unclear, or need perspective.
</p>
</div>

<div className="rounded-3xl border p-6">
<p className="text-sm text-gray-500">For situations where</p>
<p className="mt-2">
things aren’t clearly broken—but not clearly right.
</p>
</div>

<div className="rounded-3xl border p-6">
<p className="text-sm text-gray-500">For buyers who want</p>
<p className="mt-2">
structure, not coaching sessions.
</p>
</div>
</div>
</div>
</section>

{/* WHY */}
<section className="border-t px-6 py-20">
<div className="mx-auto max-w-4xl">
<h2 className="text-3xl font-semibold">
It’s hard to evaluate your situation
<br />
when everything feels mixed.
</h2>

<div className="mt-6 space-y-4 text-gray-600">
<p>Sometimes it's temporary.</p>
<p>Sometimes it's structural.</p>
<p>
Direction90 surfaces patterns from your own inputs.
</p>
</div>
</div>
</section>

{/* CTA */}
<section className="border-t px-6 py-20 text-center">
<h2 className="text-3xl font-semibold">
Get Direction90 if you want
<br />
a structured read.
</h2>

<div className="mt-8">
<Link
href="/checkout"
className="rounded-2xl bg-gray-950 px-8 py-4 text-white"
>
Get Your Direction90 — $19
</Link>
</div>

<p className="mt-4 text-sm text-gray-500">
Informational product only. Not professional advice.
</p>
</section>
</main>
);
}







