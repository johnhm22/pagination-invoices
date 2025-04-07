import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
	title: "Next.js v15 Invoice App",
	description: "Demo of Next.js v15",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased bg-slate-300`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
