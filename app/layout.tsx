import type { Metadata } from "next";
import { Geist, Geist_Mono, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/inverted-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const wixMadefor = Wix_Madefor_Display({
  variable: "--font-wix-madefor",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Drille Digital",
  description: "We craft digital identities, websites, and automated systems that help businesses grow in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${wixMadefor.variable} antialiased`}
      >
        <Cursor size={60} />
        {children}
      </body>
    </html>
  );
}