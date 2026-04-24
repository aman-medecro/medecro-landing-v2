import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/metadata";
import {
  getMedicalBusinessSchema,
  getOrganizationSchema,
} from "@/lib/structured-data";
import Navbar from "@/components/sections/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getMedicalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
      </head>
      <body className="font-sans bg-[#F8FAFC] text-[#0F172A] antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
