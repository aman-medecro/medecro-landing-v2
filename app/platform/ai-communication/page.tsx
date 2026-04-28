import type { Metadata } from "next";
import AICommunicationHero from "./sections/Hero";
import AICommunicationFeatures from "./sections/Features";
import Stats from "@/components/sections/Stats";
import IndiaMap from "@/components/sections/IndiaMap";
import DataSecurity from "@/components/sections/DataSecurity";
import Testimonials from "@/components/sections/Testimonials";
import SpecialityFlow from "@/components/sections/SpecialityFlow";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "AI Communication | Medecro.ai — Automated Patient Outreach for Indian Clinics",
  description:
    "Automate appointment reminders, follow-ups, and post-treatment care messages across WhatsApp and SMS. No manual effort, zero missed patients.",
};

export default function AICommunicationPage() {
  return (
    <>
      <AICommunicationHero />
      <AICommunicationFeatures />
      <Stats />
      <IndiaMap />
      <DataSecurity />
      <Testimonials />
      <SpecialityFlow />
      <BlogPreview />
      <FAQ />
      <Footer />
</>
  );
}
