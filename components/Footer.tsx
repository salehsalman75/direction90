import Link from "next/link";

export default function Footer() {
return (
<footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
<div className="flex flex-wrap justify-center gap-4">
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
</footer>
);
}


