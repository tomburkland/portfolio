import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { profile, SITE_URL } from "@/lib/content";

// Manrope — a geometric-humanist face standing in for Gotham Book.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} — ${profile.eyebrow}`,
  description: profile.lead,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} — ${profile.eyebrow}`,
    description: profile.lead,
    url: SITE_URL,
    siteName: profile.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
