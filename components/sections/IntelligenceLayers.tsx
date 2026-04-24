"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  FlaskConical,
  FileSearch,
  Lightbulb,
  Receipt,
} from "lucide-react";

const layers = [
  {
    icon: Brain,
    title: "AI Diagnostics",
    description:
      "Real-time symptom analysis and differential diagnosis suggestions trained on millions of Indian clinical cases.",
    color: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
    tag: "Layer 1",
  },
  {
    icon: FlaskConical,
    title: "Lab Intelligence",
    description:
      "Automated interpretation of lab reports with flagging of critical values and trend analysis over time.",
    color: "from-cyan-500 to-cyan-600",
    lightBg: "bg-cyan-50",
    lightText: "text-cyan-600",
    tag: "Layer 2",
  },
  {
    icon: FileSearch,
    title: "AI Report Assist",
    description:
      "One-click generation of clinical summaries, discharge notes, and referral letters from structured EMR data.",
    color: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
    tag: "Layer 3",
  },
  {
    icon: Lightbulb,
    title: "Recommendations",
    description:
      "Evidence-based treatment protocol suggestions with drug-drug interaction alerts and dosage guidance.",
    color: "from-amber-500 to-amber-600",
    lightBg: "bg-amber-50",
    lightText: "text-amber-600",
    tag: "Layer 4",
  },
  {
    icon: Receipt,
    title: "Billing AI",
    description:
      "Intelligent ICD-10 and CPT coding, insurance pre-auth automation, and revenue cycle optimization.",
    color: "from-green-500 to-green-600",
    lightBg: "bg-green-50",
    lightText: "text-green-600",
    tag: "Layer 5",
  },
];

export default function IntelligenceLayers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wide mb-4">
            AI-Powered
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Five intelligence layers.{" "}
            <span className="text-blue-400">One unified platform.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each layer of Medecro&apos;s AI works independently and in concert,
            giving you compound intelligence that gets smarter with every
            patient interaction.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/8 backdrop-blur transition-all duration-200 group hover:-translate-y-1 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${layer.lightBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${layer.lightText}`} />
                  </div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {layer.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {layer.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {layer.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${layer.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
