import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: {
    default: "ABI Law Associates — Professional Law Firm in Kensington & Greater London",
    template: "%s — ABI Law Associates",
  },
  description:
    "Premium legal representation. We fight for your rights with decades of experience in corporate law, litigation, and more.",
  keywords: [
    "ABI Law Associates",
    "professional law firm",
    "corporate law",
    "litigation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abilaw.co.uk",
    siteName: "ABI Law Associates",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${dmSans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
