"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    num: "01",
    title: "Specialty-native flows, built with clinicians",
    desc: "Every screen, every field, every interaction — designed with dentists for dentists, psychiatrists for psychiatrists. No compromises, no one-size fits all.",
  },
  {
    num: "02",
    title: "Only what that speciality actually needs",
    desc: "No irrelevant fields. No generic dropdowns. Only the clinical logic that matters for each doctor type — keeping consultations fast and accurate.",
  },
  {
    num: "03",
    title: "Software adapts to how doctors think",
    desc: "Rx pads are configurable per doctor. Clinical flows mirror real-world consultation patterns. The software learns your style, not the other way around.",
  },
  {
    num: "04",
    title: "AI-native from the ground up",
    desc: "Not AI added on top. AI woven into every clinical decision point — from X-ray to prescription to follow-up. Intelligence built in, not bolted on.",
  },
];

export default function Specialities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="font-[family-name:var(--font-outfit)] font-bold text-[#2563EB] uppercase mb-4 block"
            style={{ fontSize: "11px", lineHeight: "17.6px", letterSpacing: "1.65px" }}
          >
            Our Moat
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A]"
            style={{ fontSize: "48px", lineHeight: "1.15", letterSpacing: "-1px" }}
          >
            Every speciality is different.
          </h2>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-normal italic mb-5"
            style={{ fontSize: "48px", lineHeight: "1.15", letterSpacing: "-1px", color: "#2563EB" }}
          >
            We built for that.
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed max-w-sm mx-auto">
            Most clinical platforms force every doctor through the same generic
            interface. We took a different path — built from the ground up with
            clinicians.
          </p>
        </motion.div>

        {/* Single card with 2×2 grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden"
        >
          <div className="grid sm:grid-cols-2">
            {items.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                className={`p-8 ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${
                  i < 2 ? "border-b" : ""
                } border-[#E2E8F0]`}
              >
                <span
                  className="font-[family-name:var(--font-fraunces)] font-bold text-[#E2E8F0] block mb-4 select-none"
                  style={{ fontSize: "56px", lineHeight: 1 }}
                >
                  {item.num}
                </span>
                <h3 className="font-bold text-[#0F172A] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
