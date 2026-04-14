"use client";

import { useEffect } from "react";

export default function AssessmentPage() {
useEffect(() => {
const hasAccess = document.cookie.includes("direction90_access=true");

if (!hasAccess) {
window.location.href = "/checkout";
}
}, []);

return (
<main className="min-h-screen p-10">
<h1 className="text-3xl font-bold">Assessment</h1>
<p className="mt-4">This is your questionnaire.</p>
</main>
);
}







