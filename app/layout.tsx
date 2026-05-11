import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StructuredData } from "./_components/StructuredData";
import { spaceGrotesk, inter } from "./_lib/fonts";

const SITE_URL = "https://trenchdev.com";
const SITE_NAME = "Trench Dev";
const SITE_TITLE = "Trench Dev — AI automation for SMB construction";
const SITE_DESC =
  "One-week workflow audits for SMB construction subs. $3,500. From an ops admin who clawed 20+ hours a week back at a $7M glazing sub.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Trench Dev",
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  authors: [{ name: "Braden Freeman" }],
  creator: "Braden Freeman",
  publisher: SITE_NAME,
  keywords: [
    "AI automation",
    "construction automation",
    "subcontractor",
    "workflow audit",
    "SMB construction",
    "Southern California",
    "payroll automation",
    "daily reports",
    "change order automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    locale: "en_US",
    /* TODO: og-image — 1200x630 with Cut Steel wordmark on Bone, sodium hairline. */
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Trench Dev — AI automation for SMB construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    /* TODO: twitter handle when registered */
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#F2EFE9",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  // viewportFit: "cover" exposes env(safe-area-inset-*) on notched iPhones.
  // Without this, SkipLink top-inset, Footer bottom-inset, and any future
  // safe-area-aware padding silently no-op. Round 3 mobile audit, finding #7.
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
