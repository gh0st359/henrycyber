import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://henrycyber.com"),
  title: {
    default: site.title,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "https://henrycyber.com",
    siteName: site.brand,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col text-ink">
        <div className="grain pointer-events-none fixed inset-0 z-50" />
        <div className="grid-veil pointer-events-none absolute inset-x-0 top-0 h-[720px]" />
        <SiteHeader />
        <main className="relative flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
