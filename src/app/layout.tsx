import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Lato } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import StickyContact from "@/components/StickyContact";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Trishti Pariwal | SEO Content Strategist & Data Analyst",
  description: "Portfolio of Trishti Pariwal - Dedicated professional specializing in SEO Technical Writing, Content Strategy, and Data Analytics (PowerBI, Tableau).",
  keywords: ["SEO Content Writer", "Data Analytics", "PowerBI", "Tableau", "Content Strategy", "Trishti Pariwal", "Public Health", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} ${greatVibes.variable}`}>
        <Header />
        {children}
        <StickyContact />
      </body>
    </html>
  );
}
