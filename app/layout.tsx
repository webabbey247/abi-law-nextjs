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
    default: "A1 laywers Limited — Professional Law Firm in Los Angeles, CA",
    template: "%s — A1 laywers Limited",
  },
  description:
    "Premium legal representation. We fight for your rights with decades of experience in corporate law, litigation, and more.",
  keywords: [
    "A1 Lawyers Limited",
    "professional law firm",
    "corporate law",
    "litigation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://a1lawyerslimited.co.uk",
    siteName: "A1 Lawyers Limited",
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
