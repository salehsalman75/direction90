export default function CheckoutPage() {
const paymentLink =
"https://checkout.dodopayments.com/buy/pdt_0NcfTELpscc27Zbd3I6XO?quantity=1&redirect_url=https://direction90.com%2Fsuccess";

return (
<main className="min-h-screen bg-white text-gray-900">
<section className="mx-auto max-w-3xl px-6 py-20">
<div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
<p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
Direction90
</p>

<h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
Unlock Direction90
</h1>

<p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
You are purchasing access to an online product that generates a
structured report based on your submitted responses.
</p>

<div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
<p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
One-time payment
</p>

<div className="mt-3 text-6xl font-semibold tracking-tight text-gray-900">
$19
</div>

<p className="mt-3 text-sm text-gray-600">
Instant access after payment.
</p>

<a
href={paymentLink}
className="mt-8 inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white transition hover:bg-gray-800"
>
Unlock your Direction90 — $19
</a>

<div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-500">
<span>Private.</span>
<span>Structured.</span>
<span>Online product delivery.</span>
</div>
</div>

<div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
<h2 className="text-xl font-semibold text-gray-900">
What happens after payment
</h2>

<ul className="mt-5 space-y-4 text-sm leading-7 text-gray-600 md:text-base">
<li>01 — You unlock the full questionnaire</li>
<li>02 — You submit your responses</li>
<li>03 — Direction90 processes your submitted inputs</li>
<li>04 — Your report is generated and delivered online</li>
</ul>
</div>

<div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
<h2 className="text-xl font-semibold text-gray-900">What you get</h2>

<ul className="mt-5 space-y-4 text-sm leading-7 text-gray-600 md:text-base">
<li>— A generated direction: stabilize, reposition, or exit</li>
<li>— A structured signal breakdown based on your inputs</li>
<li>— Action phases aligned with your current trajectory</li>
<li>— A report delivered after questionnaire completion</li>
</ul>
</div>

<p className="mt-10 text-center text-sm leading-7 text-gray-500">
This is an online informational product. No physical goods are
shipped, and no consulting or professional service is provided.
</p>

<p className="mt-3 text-center text-sm leading-7 text-gray-500">
By purchasing, you agree to our{" "}
<a href="/terms" className="underline underline-offset-4">
Terms
</a>
,{" "}
<a href="/privacy" className="underline underline-offset-4">
Privacy Policy
</a>
, and{" "}
<a href="/refund" className="underline underline-offset-4">
Refund Policy
</a>
.
</p>
</div>
</section>
</main>
);
}


