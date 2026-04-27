"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const modules = [
  {
    id: "ai-xray",
    tab: "AI X-ray Analyser",
    shortTab: "X-ray Analyser",
    label: "AI X-RAY ANALYSER",
    status: "BETA",
    statusColor: "bg-orange-100 text-orange-600",
    titleBold: "Smart",
    titleBlue: "AI X-ray Analyser",
    description:
      "AI-powered radiology assistant that analyses X-rays instantly, highlights anomalies, and generates structured reports — built for Indian clinics.",
    features: [
      "Detects fractures, lesions & anomalies",
      "Generates structured radiology reports",
      "90% faster than manual analysis",
      "Integrated with patient records",
    ],
    link: "Explore AI X-ray Analyser",
    href: "/platform/ai-xray",
  },
  {
    id: "clinic-os",
    tab: "Intelligent Clinic OS",
    shortTab: "Clinic OS",
    label: "INTELLIGENT CLINIC OS",
    status: "LIVE",
    statusColor: "bg-green-100 text-green-600",
    titleBold: "Smart",
    titleBlue: "Intelligent Clinic OS",
    description:
      "Complete clinic management OS — appointments, billing, EMR, and workflows unified under one intelligent platform.",
    features: [
      "Smart appointment scheduling",
      "Auto-generated billing & invoices",
      "Multi-speciality EMR built-in",
      "Real-time analytics dashboard",
    ],
    link: "Explore Clinic OS",
    href: "/platform/clinic-os",
  },
  {
    id: "rx-intelligence",
    tab: "Rx Intelligence",
    shortTab: "Rx Intelligence",
    label: "RX INTELLIGENCE",
    status: "LIVE",
    statusColor: "bg-green-100 text-green-600",
    titleBold: "Smart",
    titleBlue: "Rx Intelligence",
    description:
      "The first AI-native prescription platform built specifically for Dental, Psychiatry, GPIM with built-in custom forms. Not adapted — built from scratch with clinicians.",
    features: [
      "SNOMED data mapping built-in",
      "6 lakhs+ medicines in database",
      "Complete prescription within 10 seconds",
      "Customisable Rx for each speciality",
    ],
    link: "Explore Rx Intelligence",
    href: "/platform/rx-intelligence",
  },
  {
    id: "ai-communication",
    tab: "AI Communication",
    shortTab: "Communication",
    label: "AI COMMUNICATION",
    status: "COMING SOON",
    statusColor: "bg-blue-100 text-blue-600",
    titleBold: "Smart",
    titleBlue: "AI Communication",
    description:
      "Automated patient communication layer — follow-ups, reminders, and care messages sent at the right time through the right channel.",
    features: [
      "Automated follow-up reminders",
      "WhatsApp & SMS integration",
      "Patient engagement analytics",
      "Customisable communication flows",
    ],
    link: "Explore AI Communication",
    href: "/platform/ai-communication",
  },
];

export default function FeaturesSplit() {
  const [activeId, setActiveId] = useState("rx-intelligence");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const active = modules.find((m) => m.id === activeId)!;

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="font-[family-name:var(--font-dm-sans)] font-bold text-[#2563EB] uppercase mb-4 block text-[11px] leading-[17.6px] tracking-[1.65px]">
            Platform Modules
          </span>
          <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] mb-4 text-[34px] sm:text-[44px] lg:text-[56px] leading-tight tracking-[-1px]">
            Everything your clinic needs.
            <br />
            Nothing it doesn&apos;t.
          </h2>
          <p className="text-[#64748B] text-base max-w-lg mx-auto">
            Four AI-native modules that run every clinical touchpoint from first
            contact to last follow-up.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <div className="flex overflow-x-auto sm:justify-center gap-2 pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveId(m.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0 transition-all border ${
                  activeId === m.id
                    ? "bg-[#2563EB] text-white border-[#2563EB] shadow-sm"
                    : "text-[#374151] bg-white border-[#E2E8F0] hover:text-[#0F172A]"
                }`}
              >
                {activeId !== m.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                )}
                <span className="hidden sm:inline">{m.tab}</span>
                <span className="sm:hidden">{m.shortTab}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"
        >
          {/* Left */}
          <div>
            {/* Badge + title */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
                {active.label}
              </span>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${active.statusColor}`}
              >
                {active.status}
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-4xl font-bold leading-tight mb-3">
              {active.titleBold}
              <br />
              <span className="text-[#2563EB]">{active.titleBlue}</span>
            </h3>

            {/* Mobile-only image — shown between title and description */}
            <div className="md:hidden my-5">
              <div className="w-full aspect-[4/3] rounded-2xl bg-[#D1D5DB] shadow-lg" />
            </div>

            <p className="text-[#64748B] text-sm leading-relaxed mb-6 max-w-sm">
              {active.description}
            </p>

            <ul className="space-y-3 mb-6">
              {active.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] flex-shrink-0" />
                  <span className="text-sm text-[#374151]">{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              href={active.href}
              className="text-sm font-semibold text-[#2563EB] hover:underline"
            >
              {active.link} →
            </Link>
          </div>

          {/* Right: placeholder — hidden on mobile, shown md+ */}
          <div className="hidden md:block w-full aspect-[4/3] rounded-2xl bg-[#D1D5DB] shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}
