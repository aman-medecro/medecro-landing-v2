"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "90%",
    color: "#2563EB",
    label: "Faster AI Diagnostics",
    sublabel: "Average speed improvement in AI-assisted diagnosis",
  },
  {
    value: "2K+",
    color: "#16A34A",
    label: "Clinics Live",
    sublabel: "Active clinics across 9 major cities in India",
  },
  {
    value: "92%",
    color: "#2563EB",
    label: "Adherence Improvement",
    sublabel: "Improvement in patient appointment adherence rate",
  },
  {
    value: "12+",
    color: "#16A34A",
    label: "Specialities",
    sublabel: "Medical specialities being built natively on the platform",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Label */}
        <p className="font-[family-name:var(--font-outfit)] font-bold text-[11px] leading-[17.6px] tracking-[1.65px] uppercase text-[#2563EB] mb-4 text-center">
          Platform Impact
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 700,
            fontSize: 48,
            letterSpacing: "-1px",
            color: "#0F172A",
            lineHeight: 1.15,
          }}
          className="mb-10"
        >
          Numbers that speak for themselves.
        </motion.h2>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          className="bg-[#F5F7FA] rounded-2xl border border-[#E2E8F0] grid grid-cols-4 divide-x divide-[#E2E8F0]"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-8 py-10"
            >
              <span
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontWeight: 700,
                  fontSize: 48,
                  color: stat.color,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="font-bold text-sm mt-1"
                style={{ color: "#0F172A" }}
              >
                {stat.label}
              </span>
              <span
                className="text-xs mt-1 max-w-[140px]"
                style={{ color: "#64748B" }}
              >
                {stat.sublabel}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
