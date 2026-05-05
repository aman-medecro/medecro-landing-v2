import type { Metadata } from "next";
import AIXRayHero from "./sections/Hero";
import AIXRayFeatures from "./sections/Features";
import Stats from "@/components/sections/Stats";
import IndiaMap from "@/components/sections/IndiaMap";
import Testimonials from "@/components/sections/Testimonials";
import SpecialityFlow from "@/components/sections/SpecialityFlow";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "AI X-Ray Analyser — India's Most Advanced AI Dental X-Ray",
  description:
    "Detect 22+ dental conditions in under 30 seconds. Built on the largest Indian dental dataset — designed for Indian clinics, Indian patients, Indian workflows.",
  alternates: {
    canonical: `${siteConfig.url}/platform/ai-x-ray-analyser`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/platform/ai-x-ray-analyser`,
  },
};

export default function AIXRayPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Platform", url: `${siteConfig.url}/platform` },
    { name: "AI X-Ray Analyser", url: `${siteConfig.url}/platform/ai-x-ray-analyser` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <AIXRayHero />
      <AIXRayFeatures />
      <Stats />
      <IndiaMap />
      <FAQ />
      <Testimonials />
      <SpecialityFlow />
      <Footer />
    </>
  );
}
