import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
title: "Direction90",
description: "Get clear on your next move.",
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



