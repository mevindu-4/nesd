import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neski",
  description: "Neski transforms rental management for hostels and apartments in Sri Lanka.",
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-4.jpg" />
      </head>
      <body className={outfit.variable}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
