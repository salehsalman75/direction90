"use client";

import { useEffect, useState } from "react";

export default function AssessmentPage() {
const [allowed, setAllowed] = useState(false);

useEffect(() => {
const hasAccess = document.cookie.includes("direction90_access=true");

if (!hasAccess) {
window.location.href = "/checkout";
return;
}

setAllowed(true);
}, []);

if (!allowed) {
return (
<main className="min-h-screen bg-white text-gray-950">
<section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-20">
<p className="text-base text-gray-600">Checking access...</p>
</section>
</main>
);
}

return (
<main className="min-h-screen bg-white text-gray-950">
<section className="px-6 py-20">
<div className="mx-auto max-w-3xl">
<p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
Direction90
</p>

<h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
Assessment
</h1>

<p className="mt-6 text-lg leading-8 text-gray-600">
This is the questionnaire page. Only users with payment access can
view it.
</p>
</div>
</section>
</main>
);
}









