import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { LenisProvider } from "@/src/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ADAPT | Multidisciplinary Performance & Elite Athletic Training - North Miami",
  description:
    "ADAPT is North Miami's premier multidisciplinary performance center. We combine elite functional coaching, state-of-the-art recovery systems, and custom nutrition under one roof.",
  keywords: [
    "ADAPT",
    "performance gym",
    "functional training",
    "elite athletics",
    "recovery lounge",
    "personal training",
    "strength conditioning",
    "North Miami fitness",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://trainadapt.com/",
    title: "ADAPT | Multidisciplinary Performance & Elite Athletic Training",
    description:
      "North Miami's high-performance laboratory. Experience elite strength training, biometric analytics, contrast plunges, and modern workspace integration.",
    images: "/images/AdaptLogoText.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADAPT | Multidisciplinary Performance",
    description:
      "Experience North Miami's premier athletic lab. Elite coaching, biometric performance tracking, dry infrared saunas, and custom recovery.",
    images: "/images/AdaptLogoText.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} overflow-x-hidden`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* Prevent white flash before CSS loads on mobile */}
        <style dangerouslySetInnerHTML={{ __html: `html,body{background-color:#081018;color:#dbe3ef;margin:0;padding:0}` }} />
      </head>
      <body className="antialiased bg-background text-on-surface font-sans min-h-screen flex flex-col overflow-x-hidden select-none">
        <Navbar />
        <LenisProvider>
          <main className="flex-grow">{children}</main>
        </LenisProvider>
        <Footer />
      </body>
    </html>
  );
}