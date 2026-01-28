import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import StickyContact from "@/components/StickyContact";

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
      <body>
        <Header />
        {children}
        <StickyContact />
      </body>
    </html>
  );
}
