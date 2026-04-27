"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Flag, ShieldCheck, ClipboardList } from "lucide-react";

const cards = [
  {
    icon: <Image src="/locked.svg" alt="locked" height={24} width={24} />,
    title: "AES-256 Encryption",
    description:
      "All patient records including X-rays, charts, and treatment history encrypted at rest and in transit. No plaintext data stored.",
  },
  {
    icon: <Flag size={22} className="text-[#64748B]" strokeWidth={1.5} />,
    title: "India Data Residency",
    description:
      "All records stored exclusively in Indian data centres. Patient data never leaves India — compliant with DPDP Act.",
  },
  {
    icon: <ShieldCheck size={22} className="text-[#64748B]" strokeWidth={1.5} />,
    title: "X-ray Data Privacy",
    description:
      "Dental images shared with patient-level access control. Only your clinic can view patient X-rays. No sharing with third parties.",
  },
  {
    icon: <ClipboardList size={22} className="text-[#64748B]" strokeWidth={1.5} />,
    title: "Audit Trail",
    description:
      "Every access to patient records logged immutably. Complete compliance trail for medico-legal scenarios.",
  },
];

const badges = [
  { label: "HIPAA-Ready", done: true },
  { label: "India Data Residency", done: true },
  { label: "AES-256 Encryption", done: true },
  { label: "DPDP Act Compliant", done: true },
  { label: "SOC 2 Type II (In Progress)", done: false },
];

export default function DataSecurity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#EEF2F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="block font-bold uppercase text-[#2563EB] mb-4"
            style={{ fontSize: "11px", lineHeight: "17.6px", letterSpacing: "1.65px" }}
          >
            Security &amp; Compliance
          </span>
          <h2
            className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] mb-4"
            style={{ fontSize: "48px", lineHeight: "1.15", letterSpacing: "-1px" }}
          >
            Your patients&apos; data protected with{" "}
            <span className="text-[#16A34A] italic">end-to-end encryption.</span>
          </h2>
          <p
            className="text-[#64748B] max-w-lg mx-auto text-center"
            style={{ fontSize: "16px", lineHeight: "1.7" }}
          >
            X-rays, treatment records, and billing data encrypted end to end.
            Clinics across India trust Medecro with their most sensitive clinical data.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl shadow-md border border-[#E2E8F0] p-6"
            >
              <div className="mb-4">{card.icon}</div>
              <h3
                className="font-bold text-[#0F172A] mb-2"
                style={{ fontSize: "14px", lineHeight: "1.4" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[#64748B]"
                style={{ fontSize: "13px", lineHeight: "1.65" }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance badge row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full px-4 py-1.5 text-xs font-medium text-[#0F172A]"
            >
              {badge.done ? (
                <span className="text-[#16A34A] font-bold text-sm leading-none">✓</span>
              ) : (
                <Image src={"/circle.svg"} alt="circle" width={24} height={24} className="w-3 h-3 rounded-full  shrink-0" />
              )}
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
