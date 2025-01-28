import "~/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "~/components/ui/sonner";
import QueryClientProviderContext from "./query-client-provider";

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
    <html lang="ru" className={`${main_font.variable} font-main`}>
      <body>
        <NuqsAdapter>
          <QueryClientProviderContext>{children}</QueryClientProviderContext>
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}
