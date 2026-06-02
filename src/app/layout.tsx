import type { Metadata } from "next";
import { Geist, Geist_Mono, Sulphur_Point } from "next/font/google";
import "./globals.css";
import "../styles/gradients.css";
import "../styles/button-gradient.css";
import "../styles/parallax-bg.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const geistSans = Sulphur_Point({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400"],
  // weight: ["300", "400", "500"], // or just one: weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interflow Lab | Web Design & Development Melbourne",
  description:
    "Melbourne-based web design and development lab. From launch page to full-stack platform, we build what your business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
