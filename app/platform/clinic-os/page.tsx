import type { Metadata } from "next";
import ClinicOSHero from "./sections/Hero";
import ClinicOSFeatures from "./sections/Features";
import Stats from "@/components/sections/Stats";
import IndiaMap from "@/components/sections/IndiaMap";
import Testimonials from "@/components/sections/Testimonials";
import SpecialityFlow from "@/components/sections/SpecialityFlow";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Clinic OS | Medecro.ai — India's First 360° AI-Powered Clinic Management Platform",
  description:
    "Run your clinic on autopilot. Appointments, prescriptions, billing, and follow-ups — unified under one intelligent platform built for every speciality.",
};

export default function ClinicOSPage() {
  return (
    <>
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
