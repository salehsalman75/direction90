"use client";

import { useEffect } from "react";

export default function SuccessPage() {
useEffect(() => {
const run = async () => {
const params = new URLSearchParams(window.location.search);
const email = params.get("email");

if (!email) {
window.location.href = "/checkout";
return;
}

const res = await fetch(`/api/payment-status?email=${email}`);
const data = await res.json();

if (data.paid) {
document.cookie = "direction90_access=true; path=/";
window.location.href = "/assessment";
} else {
window.location.href = "/checkout";
}
};

run();
}, []);

return (
<div className="flex min-h-screen items-center justify-center">
<p>Verifying payment...</p>
</div>
);
}





