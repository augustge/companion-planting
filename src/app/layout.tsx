import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Samplanting",
    template: "%s — Samplanting",
  },
  description: "Finn plantekombinasjoner som trives sammen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${garamond.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
