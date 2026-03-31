"use client";

import { useState } from "react";

const steps = [
{
question: "How do you feel about your current role?",
options: [
"Something feels off",
"I’m okay, but not excited",
"I feel stuck",
"I’m growing and happy",
],
},
{
question: "What’s the hardest part right now?",
options: [
"Lack of clarity",
"No growth",
"Wrong environment",
"I don’t know what’s next",
],
},
{
question: "If nothing changes… how do you feel?",
options: [
"Frustrated",
"Anxious",
"Lost",
"I’ll just keep going",
],
},
];

export default function AssessmentPage() {
const [step, setStep] = useState(0);

const progress = ((step + 1) / (steps.length + 1)) * 100;

return (
<main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
<div className="w-full max-w-xl mb-10">
<div className="h-1 bg-gray-200 rounded-full overflow-hidden">
<div
className="h-full bg-gray-900 transition-all duration-500"
style={{ width: `${progress}%` }}
/>
</div>
</div>

<div className="w-full max-w-xl text-center">
{step < steps.length && (
<>
<h1 className="text-3xl font-semibold text-gray-900 leading-snug">
{steps[step].question}
</h1>

<div className="mt-10 space-y-4">
{steps[step].options.map((option, i) => (
<button
key={i}
onClick={() => setStep(step + 1)}
className="w-full rounded-xl border border-gray-200 bg-white px-6 py-4 text-left text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition"
>
{option}
</button>
))}
</div>
</>
)}

{step === steps.length && (
<>
<h1 className="text-4xl font-semibold text-gray-900 leading-tight">
We’ve identified something important.
</h1>

<p className="mt-4 text-lg text-gray-600">
There’s a pattern in your answers most people miss.
<br />
<br />
It explains why you feel stuck — even when things look “fine”.
<br />
<br />
Your full clarity report is ready to be unlocked.
</p>

<div className="mt-10">
<button className="rounded-2xl bg-gray-950 px-8 py-4 text-white font-semibold hover:bg-gray-800 transition">
Unlock your Direction90 — $19
</button>
</div>

<p className="mt-3 text-sm text-gray-400">
This is based on patterns across hundreds of real career paths.
</p>

<p className="mt-4 text-sm text-gray-500">
Private. Thoughtful. Built for real decisions.
</p>
</>
)}
</div>
</main>
);
}




