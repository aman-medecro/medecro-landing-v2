import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import { getFAQSchema } from "@/lib/structured-data";
import { faqItems } from "@/lib/faq-data";

// Lazy-load below-fold sections for performance
const FeaturesSplit = dynamic(() => import("@/components/sections/FeaturesSplit"));
const UnifiedPlatform = dynamic(() => import("@/components/sections/UnifiedPlatform"));
const IntelligenceLayers = dynamic(() => import("@/components/sections/IntelligenceLayers"));
const ComparisonTable = dynamic(() => import("@/components/sections/ComparisonTable"));
const Specialities = dynamic(() => import("@/components/sections/Specialities"));
const Stats = dynamic(() => import("@/components/sections/Stats"));
const IndiaMap = dynamic(() => import("@/components/sections/IndiaMap"));
const DataSecurity = dynamic(() => import("@/components/sections/DataSecurity"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const SpecialityFlow = dynamic(() => import("@/components/sections/SpecialityFlow"));
const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function HomePage() {
  const faqSchema = getFAQSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <LogoBar />
      <FeaturesSplit />
      <UnifiedPlatform />
      <IntelligenceLayers />
      <ComparisonTable />
      <Specialities />
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
