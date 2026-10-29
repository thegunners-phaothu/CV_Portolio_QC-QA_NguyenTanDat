import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cvData } from "@/data/cvData";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-sans", display: "swap" });

const TITLE = "Nguyen Tan Dat | QA/QC Tester & Software Quality Engineer";
const DESCRIPTION =
  "Portfolio of Nguyen Tan Dat - QA/QC Tester with 4 years of experience in API testing, SQL validation, end-to-end workflows, and system optimization for DMS, E-commerce, and Ticketing systems.";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: cvData.profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: `${cvData.profile.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

// Runs before paint to avoid a flash of the wrong theme. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
              <body className="font-sans bg-[#C0C0C0] text-slate-900 min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
