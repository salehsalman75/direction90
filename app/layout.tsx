import "./globals.css";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Direction90",
description:
"A digital report generated from your assessment inputs to provide a structured direction signal.",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body className="bg-white text-gray-900">
{children}
<Footer />
</body>
</html>
);
}

