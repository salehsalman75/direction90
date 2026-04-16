import "./globals.css";
import Image from "next/image";

export const metadata = {
title: "Direction90",
description: "Structured clarity for unclear work situations.",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body className="bg-white text-gray-900">
{/* NAVBAR */}
<header className="w-full border-b border-gray-200 bg-white">
<div className="mx-auto flex max-w-6xl items-center px-6 py-4">
<Image
src="/logo.png"
alt="Direction90"
width={140}
height={40}
priority
/>
</div>
</header>

{/* PAGE CONTENT */}
<main>{children}</main>
</body>
</html>
);
}


