import type { Metadata } from "next";
import DentistryHero from "./sections/Hero";
import DentistryFeatures from "./sections/Features";
import { siteConfig } from "@/lib/metadata";
import Stats from "@/components/sections/Stats";
import IndiaMap from "@/components/sections/IndiaMap";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import SpecialityFlow from "@/components/sections/SpecialityFlow";
import Footer from "@/components/sections/Footer";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "AI-Powered Dental Clinic Management Software",
  description:
    "Run your dental practice with intelligent workflows, AI dental X-ray analysis, smart patient management, and automated billing — designed for Indian dentists.",
  alternates: {
    canonical: `${siteConfig.url}/specialities/dentistry`,
  },
};

export default function DentistryPage() {
    const breadcrumb = getBreadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Specialities", url: `${siteConfig.url}/specialities` },
        { name: "Dentistry", url: `${siteConfig.url}/specialities/dentistry` },
      ]);
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      <DentistryHero />
      <DentistryFeatures />
      <Stats/>
      <IndiaMap/>
      <FAQ />
      <Testimonials/>
      <SpecialityFlow />
      <Footer/>
    </>
  );
}
