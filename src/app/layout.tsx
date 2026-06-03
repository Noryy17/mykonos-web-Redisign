import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Mykonos — Parfum Lokal Indonesia",
  description:
    "Temukan parfum yang menceritakan kisahmu. Mykonos menghadirkan koleksi parfum berkualitas tinggi dengan aroma khas yang terinspirasi dari keindahan dunia.",
  keywords: [
    "parfum",
    "perfume",
    "mykonos",
    "parfum lokal",
    "parfum indonesia",
    "fragrance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-body bg-white text-neutral-900" suppressHydrationWarning>
        <SmoothScrollProvider>
          <TooltipProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
