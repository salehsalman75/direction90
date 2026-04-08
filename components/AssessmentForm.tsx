"use client";

import { useMemo, useState } from "react";

type Question = {
id: string;
title: string;
options: string[];
};

const questions: Question[] = [
{
id: "role_duration",
title: "1) How long have you been in your current role or field?",
options: ["Less than 1 year", "1–2 years", "2–5 years", "More than 5 years"],
},
{
id: "role_expectation",
title: "2) Compared to what you expected, this role feels:",
options: [
"Better",
"About what I expected",
"Slightly disappointing",
"Very different than expected",
],
},
{
id: "growth_path",
title: "3) Do you see a realistic path to grow here?",
options: ["Yes", "Somewhat", "Hard to see", "No"],
},
{
id: "performance_impact",
title: "4) If you performed at your best, would your position improve?",
options: ["Definitely", "Possibly", "Unlikely", "No"],
},
{
id: "environment",
title: "5) Your work environment feels:",
options: ["Supportive", "Stable but slow", "Political", "Limiting"],
},
{
id: "biggest_concern",
title: "6) Your biggest concern right now:",
options: [
"Not progressing fast enough",
"Being in the wrong place",
"Wasting time",
"Making a wrong move",
],
},
{
id: "six_months",
title: "7) If nothing changes in 6 months:",
options: [
"I’ll grow into it",
"I’ll stay but feel stuck",
"I’ll start searching",
"I’ll leave",
],
},
{
id: "leaning_toward",
title: "8) Deep down, you’re leaning toward:",
options: [
"Make it work",
"Test options quietly",
"Prepare for a move",
"Leave soon",
],
},
{
id: "compensation_anchor",
title: "9) Does your compensation make it harder to consider change?",
options: [
"Yes, it’s a major reason I stay",
"Somewhat",
"Not really",
"No",
],
},
];

type Answers = Record<string, string>;

export default function AssessmentForm() {
const [step, setStep] = useState(0);
const [answers, setAnswers] = useState<Answers>({});
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState("");
const [isSubmitted, setIsSubmitted] = useState(false);

const totalSteps = questions.length + 1;
const progress = ((step + 1) / totalSteps) * 100;

const currentQuestion = useMemo(() => {
if (step >= questions.length) return null;
return questions[step];
}, [step]);

const isEmailValid = /\S+@\S+\.\S+/.test(email.trim());

const canContinue = currentQuestion ? Boolean(answers[currentQuestion.id]) : false;
const canSubmit = name.trim().length > 1 && isEmailValid;

const handleSelect = (questionId: string, option: string) => {
setAnswers((prev) => ({
...prev,
[questionId]: option,
}));
};

const handleNext = () => {
if (!currentQuestion) return;
if (!answers[currentQuestion.id]) return;
setStep((prev) => prev + 1);
};

const handleBack = () => {
if (step === 0) return;
setStep((prev) => prev - 1);
};

const handleSubmit = async () => {
if (!canSubmit) return;

setIsSubmitting(true);
setSubmitError("");

try {
const payload = {
name: name.trim(),
email: email.trim(),
answers,
submittedAt: new Date().toISOString(),
};

const response = await fetch("/api/assessment", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(payload),
});

if (!response.ok) {
throw new Error("Something went wrong while submitting your assessment.");
}

setIsSubmitted(true);
} catch (error) {
setSubmitError(
error instanceof Error ? error.message : "Something went wrong. Please try again."
);
} finally {
setIsSubmitting(false);
}
};

if (isSubmitted) {
return (
<main className="min-h-screen bg-white px-6 py-20 text-gray-900">
<div className="mx-auto max-w-2xl">
<div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
<p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
Direction90
</p>

<h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
Your assessment has been received.
</h1>

<p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
Thank you. Your answers are now in the system, and your Direction90 report
can be prepared and sent to your email.
</p>

<div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6">
<h2 className="text-lg font-semibold text-gray-900">What happens next</h2>

<div className="mt-4 space-y-3 text-gray-600">
<p>01 — Your answers are reviewed</p>
<p>02 — Your direction is identified</p>
<p>03 — Your 90-day report is prepared</p>
<p>04 — Your report is sent to {email}</p>
</div>
</div>

<p className="mt-6 text-sm text-gray-500">
Private. Thoughtful. Built for real decisions.
</p>
</div>
</div>
</main>
);
}

return (
<main className="min-h-screen bg-white px-6 py-20 text-gray-900">
<div className="mx-auto max-w-2xl">
<div className="mb-10">
<div className="flex items-center justify-between">
<p className="text-sm text-gray-400">
Step {step + 1} of {totalSteps}
</p>

{step > 0 && (
<button
type="button"
onClick={handleBack}
className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
>
Back
</button>
)}
</div>

<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
<div
className="h-full rounded-full bg-gray-900 transition-all duration-300"
style={{ width: `${progress}%` }}
/>
</div>
</div>

<div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10">
{currentQuestion ? (
<>
{step === 0 && (
<>
<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
Your 90-Day Direction
</h1>

<p className="mt-8 text-lg leading-relaxed text-gray-600">
Clarity on whether to stay, reposition, or prepare your next move.
</p>

<p className="mt-3 text-lg leading-relaxed text-gray-600">
Answer honestly. This is for you.
</p>
</>
)}

<h2 className={`${step === 0 ? "mt-14" : ""} text-2xl font-semibold tracking-tight sm:text-3xl`}>
{currentQuestion.title}
</h2>

<div className="mt-8 space-y-4">
{currentQuestion.options.map((option) => {
const isSelected = answers[currentQuestion.id] === option;

return (
<button
key={option}
type="button"
onClick={() => handleSelect(currentQuestion.id, option)}
className={`w-full rounded-2xl border px-6 py-5 text-left text-base transition-all duration-200 ${
isSelected
? "border-gray-900 bg-gray-900 text-white"
: "border-gray-200 bg-white text-gray-800 hover:border-gray-900 hover:bg-gray-50"
}`}
>
{option}
</button>
);
})}
</div>

<div className="mt-8 flex justify-center">
<button
type="button"
onClick={handleNext}
disabled={!canContinue}
className="rounded-2xl bg-gray-950 px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
>
Continue
</button>
</div>
</>
) : (
<>
<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
Almost done.
</h1>

<p className="mt-6 text-lg leading-relaxed text-gray-600">
Tell us where to send your Direction90 report.
</p>

<div className="mt-10 space-y-6">
<div>
<label
htmlFor="name"
className="mb-2 block text-sm font-medium text-gray-700"
>
Name *
</label>
<input
id="name"
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Your name"
className="w-full rounded-2xl border border-gray-200 px-4 py-4 text-base text-gray-900 outline-none transition focus:border-gray-900"
/>
</div>

<div>
<label
htmlFor="email"
className="mb-2 block text-sm font-medium text-gray-700"
>
Where should we send your Direction90 report? *
</label>
<input
id="email"
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="you@example.com"
className="w-full rounded-2xl border border-gray-200 px-4 py-4 text-base text-gray-900 outline-none transition focus:border-gray-900"
/>
<p className="mt-2 text-sm text-gray-500">
We’ll email it to you instantly.
</p>
</div>
</div>

<div className="mt-8 flex justify-center">
<button
type="button"
onClick={handleSubmit}
disabled={!canSubmit || isSubmitting}
className="rounded-2xl bg-gray-950 px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
>
{isSubmitting ? "Submitting..." : "Get My Direction90 Report →"}
</button>
</div>

{submitError && (
<p className="mt-4 text-center text-sm text-red-600">{submitError}</p>
)}
</>
)}
</div>
</div>
</main>
);
}

