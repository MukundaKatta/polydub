import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PolyDub — Dub your videos. In every language.",
  description:
    "Upload once. Get perfectly lip-synced dubs in 40 plus languages, at creator-friendly prices.",
  openGraph: {
    title: "PolyDub — Dub your videos. In every language.",
    description:
      "Upload once. Get perfectly lip-synced dubs in 40 plus languages, at creator-friendly prices.",
    images: [
      {
        url: "https://waitlist-api-sigma.vercel.app/api/og?title=PolyDub&accent=emerald&category=Creator%20tools",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://waitlist-api-sigma.vercel.app/api/og?title=PolyDub&accent=emerald&category=Creator%20tools",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
