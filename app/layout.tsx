import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
title: "Direction90",
description: "Get clear on your next move.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body className="bg-white text-gray-900 antialiased">
{children}
<Footer />
</body>
</html>
);
}
