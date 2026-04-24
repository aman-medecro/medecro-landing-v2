"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "AI-powered appointment scheduling with zero conflicts",
  "Smart EMR that auto-fills from voice and past records",
  "One-click billing with insurance claim automation",
  "Lab results interpreted by AI in real time",
  "Speciality-specific templates out of the box",
  "Multi-clinic management from a single dashboard",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function FeaturesSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
                Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-4">
                Everything your clinic needs.{" "}
                <span className="text-[#64748B]">Nothing it doesn&apos;t.</span>
              </h2>
              <p className="text-[#64748B] text-lg mb-8">
                Built from the ground up for Indian clinical workflows. No bloat,
                no unnecessary complexity — just the tools that make your
                practice run smoothly.
              </p>
            </motion.div>

            <ul className="space-y-3">
              {features.map((feat, i) => (
                <motion.li
                  key={feat}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0F172A] text-sm leading-relaxed">
                    {feat}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                See all features →
              </a>
            </motion.div>
          </div>

          {/* Right: product screenshot placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-[#E2E8F0] p-6 shadow-xl shadow-blue-500/5">
              {/* EMR mockup */}
              <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-semibold text-[#64748B] mb-1">
                      Patient Record
                    </div>
                    <div className="text-base font-bold text-[#0F172A]">
                      Sunita Rao, 45F
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Chief Complaint", value: "Knee pain for 3 months" },
                    { label: "Vitals", value: "BP: 120/80 | HR: 72 | SpO2: 98%" },
                    { label: "AI Diagnosis", value: "Osteoarthritis (Grade II) — high confidence" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg bg-gray-50 border border-[#E2E8F0]"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[#64748B] font-medium">
                        {item.label}
                      </span>
                      <span className="text-sm text-[#0F172A] font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-lg bg-[#2563EB] text-white text-xs font-semibold">
                    Add Prescription
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-lg border border-[#E2E8F0] text-xs font-semibold text-[#64748B]">
                    Order Lab Test
                  </button>
                </div>
              </div>

              {/* AI suggestion card */}
              <div className="mt-3 p-3 rounded-xl bg-blue-600 text-white flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold">AI</span>
                </div>
                <div className="text-xs">
                  <strong>Suggested:</strong> X-ray knee bilateral + physiotherapy
                  referral based on symptom pattern.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
