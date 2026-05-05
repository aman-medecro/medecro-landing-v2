import type { Metadata } from "next";

export const siteConfig = {
  name: "Medecro",
  title: "Medecro – Clinical Intelligence, Reimagined",
  description:
    "Medecro is the AI-powered clinic management platform built for Indian doctors. Manage appointments, EMR, billing, and diagnostics in one place.",
  url: "https://medecro.ai",
  ogImage: "https://medecro.ai/og-image.png",
  keywords: [
    "clinic management software",
    "AI healthcare platform India",
    "EMR software for doctors",
    "clinical intelligence",
    "medical billing software",
    "appointment management",
    "AI diagnostics",
    "doctor software India",
    "hospital management system",
    "Medecro",
  ],
  twitterHandle: "@medecroai",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Medecro", url: siteConfig.url }],
  creator: "Medecro",
  publisher: "Medecro",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Medecro – Clinical Intelligence, Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
