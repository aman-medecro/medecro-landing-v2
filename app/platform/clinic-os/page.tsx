import type { Metadata } from "next";
import ClinicOSHero from "./sections/Hero";
import ClinicOSFeatures from "./sections/Features";
import Stats from "@/components/sections/Stats";
import IndiaMap from "@/components/sections/IndiaMap";
import Testimonials from "@/components/sections/Testimonials";
import SpecialityFlow from "@/components/sections/SpecialityFlow";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import { getBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Clinic OS — India's First 360° AI-Powered Clinic Management Platform",
  description:
    "Run your clinic on autopilot. Appointments, prescriptions, billing, and follow-ups — unified under one intelligent platform built for every speciality.",
  alternates: {
    canonical: `${siteConfig.url}/platform/clinic-os`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/platform/clinic-os`,
  },
};

export default function ClinicOSPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Platform", url: `${siteConfig.url}/platform` },
    { name: "Clinic OS", url: `${siteConfig.url}/platform/clinic-os` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ClinicOSHero />
      <ClinicOSFeatures />
      <Stats />
      <IndiaMap />
      <FAQ />
      <Testimonials />
      <SpecialityFlow />
      <Footer />
    </>
  );
}
