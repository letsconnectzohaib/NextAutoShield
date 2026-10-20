import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IMAGES, SITE } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: "Auto Insurance Made Clear | Next Auto Shield",
    template: "%s | Next Auto Shield",
  },
  description: SITE.description,
  applicationName: SITE.name,
  icons: { icon: "/brand-mark.svg" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Auto Insurance Made Clear | Next Auto Shield",
    description: SITE.description,
    url: SITE.origin,
    images: [{ url: IMAGES.hero, width: 1920, height: 1080, alt: "A modern sedan on a quiet road" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Insurance Made Clear | Next Auto Shield",
    description: SITE.description,
    images: [IMAGES.hero],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
