"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Building2, Pill, MessageCircle, BarChart3 } from "lucide-react";
import Link from "next/link";

const layers = [
  {
    icon: Brain,
    iconColor: "text-purple-500",
    title: "AI Diagnostics Layer",
    description:
      "Real-time X-ray analysis, condition detection with confidence scoring, and one-click treatment plan generation. AI assists diagnosis before you type a word.",
    link: "Explore AI Diagnostics",
    href: "/platform/ai-diagnostics",
  },
  {
    icon: Building2,
    iconColor: "text-green-500",
    title: "Intelligent Clinic OS",
    description:
      "Specialty-native clinical flows for every consultation — check-in to discharge in one seamless journey. OPD, IPD, and teleconsult unified.",
    link: "Explore Clinic OS",
    href: "/platform/clinic-os",
  },
  {
    icon: Pill,
    iconColor: "text-teal-500",
    title: "Rx Intelligence",
    description:
      "AI-native prescription platform with 6.5L+ medicines, SNOMED CT mapping, and speciality-specific Rx pads. Complete prescription in 10 seconds.",
    link: "Explore Rx Intelligence",
    href: "/platform/rx-intelligence",
  },
  {
    icon: MessageCircle,
    iconColor: "text-cyan-500",
    title: "AI Communication",
    description:
      "Automated patient engagement across WhatsApp and SMS. Predictive no-show prevention, post-visit follow-ups, and AI-drafted care instructions.",
    link: "Explore AI Comms",
    href: "/platform/ai-communication",
  },
];

const billing = {
  icon: BarChart3,
  iconColor: "text-green-500",
  title: "Billing & Revenue Intelligence",
  description:
    "Advance payments, refund tracking, auto-coded claims, and revenue analytics — unified across every speciality.",
  link: "Explore Billing",
  href: "/platform/billing",
};

export default function IntelligenceLayers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="font-[family-name:var(--font-dm-sans)] font-bold text-[#2563EB] uppercase mb-4 block text-[11px] leading-[17.6px] tracking-[1.65px]">
            Platform Architecture
          </span>
          <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[-1px]">
            Five intelligence layers.
          </h2>
          <h2 className="font-[family-name:var(--font-fraunces)] font-normal italic mb-5 text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[-1px] text-[#2563EB]">
            One unified platform.
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed max-w-md mx-auto">
            Each layer is a complete intelligence system — not a feature. Together,
            they run every clinical touchpoint from first contact to last follow-up.
          </p>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col gap-3"
              >
                <Icon size={28} className={layer.iconColor} strokeWidth={1.5} />
                <h3 className="text-base font-bold text-[#0F172A]">{layer.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                  {layer.description}
                </p>
                <Link
                  href={layer.href}
                  className="text-sm font-semibold text-[#2563EB] hover:underline"
                >
                  → {layer.link}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width 5th card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <billing.icon size={28} className={`${billing.iconColor} shrink-0`} strokeWidth={1.5} />
            <div>
              <h3 className="text-base font-bold text-[#0F172A] mb-1">{billing.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed max-w-lg">
                {billing.description}
              </p>
            </div>
          </div>
          <Link
            href={billing.href}
            className="text-sm font-semibold text-[#2563EB] hover:underline whitespace-nowrap shrink-0"
          >
            {billing.link} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
