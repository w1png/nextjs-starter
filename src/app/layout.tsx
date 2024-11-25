import "~/styles/globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Inter } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

const main_font = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-main",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Create T3 App",
	description: "Generated by create-t3-app",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${main_font.variable} font-main`}>
			<body>
				<NuqsAdapter>
					<TRPCReactProvider>{children}</TRPCReactProvider>
				</NuqsAdapter>
			</body>
		</html>
	);
}
