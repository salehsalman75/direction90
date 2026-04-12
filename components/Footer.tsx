import Link from "next/link";

export default function Footer() {
return (
<footer className="border-t border-gray-200 px-6 py-8">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
<p className="text-sm text-gray-500">
© {new Date().getFullYear()} Direction90. All rights reserved.
</p>

<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
<Link href="/privacy" className="underline hover:text-gray-700">
Privacy
</Link>
<Link href="/terms" className="underline hover:text-gray-700">
Terms
</Link>
<Link href="/refund" className="underline hover:text-gray-700">
Refund
</Link>
<Link href="/contact" className="underline hover:text-gray-700">
Contact
</Link>
</div>
</div>
</footer>
);
}
