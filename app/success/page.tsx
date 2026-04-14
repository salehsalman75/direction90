export default function SuccessPage() {
return (
<main className="min-h-screen bg-white text-gray-900">
<section className="mx-auto flex max-w-3xl px-6 py-24">
<div className="w-full rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
<p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
Direction90
</p>

<h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
Payment successful
</h1>

<p className="mt-6 text-base leading-7 text-gray-600 md:text-lg">
Your payment was received successfully.
</p>

<p className="mt-3 text-base leading-7 text-gray-600 md:text-lg">
You now have access to Direction90.
</p>

<p className="mt-8 text-sm leading-7 text-gray-500">
Continue to the questionnaire or return to the homepage.
</p>

<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a
href="/"
className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
>
Back to home
</a>

<a
href="/assessment"
className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
>
Continue to questionnaire
</a>
</div>
</div>
</section>
</main>
);
}
