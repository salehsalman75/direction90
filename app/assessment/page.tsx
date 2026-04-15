"use client";

import { useEffect, useState } from "react";
import AssessmentForm from "@/components/AssessmentForm";

export default function AssessmentPage() {
const [status, setStatus] = useState<"checking" | "allowed" | "denied">(
"checking"
);

useEffect(() => {
const verifyAccess = async () => {
try {
const email =
localStorage.getItem("direction90_email")?.trim().toLowerCase() || "";

if (!email) {
setStatus("denied");
window.location.replace("/checkout");
return;
}

const response = await fetch("/api/check-access", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ email }),
});

const data = await response.json();

if (!response.ok || !data?.paid) {
localStorage.removeItem("direction90_email");
document.cookie =
"direction90_access=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
setStatus("denied");
window.location.replace("/checkout");
return;
}

setStatus("allowed");
} catch (error) {
console.error("Assessment access check failed:", error);
localStorage.removeItem("direction90_email");
document.cookie =
"direction90_access=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
setStatus("denied");
window.location.replace("/checkout");
}
};

verifyAccess();
}, []);

if (status !== "allowed") {
return (
<main className="min-h-screen bg-white text-gray-950">
<section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-20">
<p className="text-base text-gray-600">Checking access...</p>
</section>
</main>
);
}

return <AssessmentForm />;
}


