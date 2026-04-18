import "./globals.css";

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
<body className="bg-white text-gray-950">{children}</body>
</html>
);
}

