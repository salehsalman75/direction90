import "./globals.css";
import Image from "next/image";

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>
{/* NAVBAR */}
<header className="w-full border-b border-gray-200 bg-white">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">
<Image
src="/logo.png"
alt="Direction90"
width={140}
height={40}
priority
/>
</div>
</div>
</header>

{/* PAGE CONTENT */}
{children}
</body>
</html>
);
}

