"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "AI-powered diagnostics", medecro: true, others: false },
  { feature: "Speciality-native workflows", medecro: true, others: false },
  { feature: "Real-time lab interpretation", medecro: true, others: false },
  { feature: "Automated billing & coding", medecro: true, others: false },
  { feature: "Voice-to-EMR transcription", medecro: true, others: false },
  { feature: "Built for Indian regulations", medecro: true, others: false },
  { feature: "Patient engagement app", medecro: true, others: true },
  { feature: "Appointment scheduling", medecro: true, others: true },
  { feature: "Basic reporting", medecro: true, others: true },
];

export default function ComparisonTable() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
            Why Medecro
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Most software manages your clinic.{" "}
            <span className="text-[#2563EB]">Medecro thinks with it.</span>
          </h2>
          <p className="text-[#64748B] text-lg">
            See how Medecro stacks up against traditional clinic management
            software.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
            <div className="px-6 py-4 text-sm font-semibold text-[#64748B]">
              Feature
            </div>
            <div className="px-6 py-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB] text-white text-sm font-bold">
                <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold">M</span>
                </div>
                Medecro
              </div>
            </div>
            <div className="px-6 py-4 text-center text-sm font-semibold text-[#64748B]">
              Others
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className={`grid grid-cols-3 border-b last:border-b-0 border-[#E2E8F0] ${
                i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]/50"
              }`}
            >
              <div className="px-6 py-4 text-sm text-[#0F172A] flex items-center">
                {row.feature}
              </div>
              <div className="px-6 py-4 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={14} className="text-[#16A34A] font-bold" strokeWidth={3} />
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-center">
                {row.others ? (
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                    <Check size={14} className="text-[#16A34A]" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                    <X size={14} className="text-red-500" strokeWidth={3} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/20"
          >
            Switch to Medecro today →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
