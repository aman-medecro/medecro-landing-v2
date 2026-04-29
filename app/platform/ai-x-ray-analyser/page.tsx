import type { Metadata } from "next";
import AIXRayHero from "./sections/Hero";
import AIXRayFeatures from "./sections/Features";
import Stats from "@/components/sections/Stats";
import IndiaMap from "@/components/sections/IndiaMap";
import Testimonials from "@/components/sections/Testimonials";
import SpecialityFlow from "@/components/sections/SpecialityFlow";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "AI X-Ray Analyser | Medecro.ai — India's Most Advanced AI Dental X-Ray",
  description:
    "Detect 22+ dental conditions in under 30 seconds. Built on the largest Indian dental dataset — designed for Indian clinics, Indian patients, Indian workflows.",
};

export default function AIXRayPage() {
  return (
    <>
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
