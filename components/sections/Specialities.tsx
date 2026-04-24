"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specialities = [
  { name: "Dental", emoji: "🦷", desc: "Charting, OPG, treatment plans" },
  { name: "Dermatology", emoji: "✨", desc: "Skin conditions, photo tracking" },
  { name: "Orthopaedics", emoji: "🦴", desc: "Fracture mgmt, physio referrals" },
  { name: "Gynaecology", emoji: "🩺", desc: "OB/GYN cycles, ultrasound logs" },
  { name: "General Practice", emoji: "🏥", desc: "All-purpose clinical workflows" },
  { name: "Ophthalmology", emoji: "👁️", desc: "Vision charts, IOL planning" },
  { name: "Cardiology", emoji: "❤️", desc: "ECG interpretation, risk scoring" },
  { name: "Paediatrics", emoji: "👶", desc: "Growth charts, vaccination" },
  { name: "ENT", emoji: "👂", desc: "Audiometry, scope findings" },
  { name: "Neurology", emoji: "🧠", desc: "Seizure tracking, MMSE" },
  { name: "Psychiatry", emoji: "💬", desc: "PHQ-9, mood journaling, notes" },
  { name: "Urology", emoji: "🔬", desc: "PSA, urodynamics, surgical prep" },
];

export default function Specialities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-600 uppercase tracking-wide mb-4">
            Specialities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Every speciality is different.{" "}
            <span className="text-[#2563EB]">We built for that.</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Medecro ships with native workflows for 12+ specialities. No
            customisation needed — just select yours and go.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {specialities.map((spec, i) => (
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-200 cursor-default"
            >
              <div className="text-3xl mb-3">{spec.emoji}</div>
              <h3 className="font-bold text-[#0F172A] text-sm mb-1">
                {spec.name}
              </h3>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-sm text-[#64748B]"
        >
          Don&apos;t see yours?{" "}
          <a href="#contact" className="text-[#2563EB] font-semibold hover:underline">
            Request your speciality →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
