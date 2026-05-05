import type { Metadata } from "next";
import AICommunicationHero from "./sections/Hero";
import AICommunicationFeatures from "./sections/Features";
import Stats from "@/components/sections/Stats";
import IndiaMap from "@/components/sections/IndiaMap";
import Testimonials from "@/components/sections/Testimonials";
import SpecialityFlow from "@/components/sections/SpecialityFlow";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "AI Communication — Automated Patient Outreach for Indian Clinics",
  description:
    "Automate appointment reminders, follow-ups, and post-treatment care messages across WhatsApp and SMS. No manual effort, zero missed patients.",
  alternates: {
    canonical: `${siteConfig.url}/platform/ai-communication`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/platform/ai-communication`,
  },
};

export default function AICommunicationPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Platform", url: `${siteConfig.url}/platform` },
    { name: "AI Communication", url: `${siteConfig.url}/platform/ai-communication` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <AICommunicationHero />
      <AICommunicationFeatures />
      <Stats />
      <IndiaMap />
      <FAQ />
      <Testimonials />
      <SpecialityFlow />
      <Footer />
    </>
  );
}
