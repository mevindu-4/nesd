import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neski.lk"),
  title: {
    default: "Neski | Sri Lanka's Premium Rental Management Ecosystem",
    template: "%s | Neski"
  },
  description: "Transform your rental management with Neski. Automated rent collection, tenant verification, and digital receipt tracking for Sri Lankan landlords and hostels.",
  keywords: ["Property management app Sri Lanka", "Remote rent collection", "Verified university boarding", "Hostel management software Sri Lanka", "Neski"],
  authors: [{ name: "Neski" }],
  openGraph: {
    title: "Neski | Premium Rental Management Ecosystem",
    description: "Automated rent collection, tenant verification, and digital receipt tracking for Sri Lankan landlords and overseas property owners.",
    url: "https://neski.lk",
    siteName: "Neski",
    images: [
      {
        url: "https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg",
        width: 800,
        height: 600,
        alt: "Neski Web Platform Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neski | Premium Rental Management",
    description: "Automated rent collection, tenant verification, and digital receipt tracking for Sri Lankan landlords and overseas property owners.",
    images: ["https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg"],
  },
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg" },
    ],
    shortcut: "https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg",
    apple: "https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Neski",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "RealEstateApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "LKR"
    },
    "description": "Neski provides automated rent collection, utility tracking, and digital receipts for landlords and verified boarding places in Sri Lanka.",
    "url": "https://neski.lk"
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.variable}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <GoogleAnalytics gaId="G-6JXV42XTXS" />
      </body>
    </html>
  );
}
