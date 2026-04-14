"use client";

import { useEffect, useState } from "react";
import AssessmentForm from "@/components/AssessmentForm";

export default function AssessmentPage() {
const [status, setStatus] = useState<"checking" | "allowed" | "denied">("checking");

useEffect(() => {
const hasAccess = document.cookie
.split("; ")
.some((item) => item.startsWith("direction90_access=true"));

if (!hasAccess) {
setStatus("denied");
window.location.replace("/checkout");
return;
}

setStatus("allowed");
}, []);

if (status !== "allowed") {
return (
<main className="min-h-screen bg-white text-gray-950">
<section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-20">
<p className="text-base text-gray-600">
{status === "checking" ? "Checking access..." : "Redirecting to checkout..."}
</p>
</section>
</main>
);
}

return (
<main className="min-h-screen bg-white text-gray-950">
<AssessmentForm />
</main>
);
}


