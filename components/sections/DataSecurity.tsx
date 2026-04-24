"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Award, Server } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Zero Data Breach",
    description:
      "End-to-end 256-bit AES encryption at rest and in transit. Your patient data has never been compromised since inception.",
    stat: "0",
    statLabel: "Breaches",
    color: "bg-green-50 text-green-600",
    borderColor: "border-green-100",
  },
  {
    icon: Award,
    title: "SOC2 Type II Compliant",
    description:
      "Independently audited and certified for security, availability, processing integrity, confidentiality, and privacy.",
    stat: "SOC2",
    statLabel: "Certified",
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-100",
  },
  {
    icon: Server,
    title: "Local Data Storage",
    description:
      "All patient data is stored on servers physically located in India, compliant with DPDP Act 2023 and NMC guidelines.",
    stat: "100%",
    statLabel: "India-hosted",
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-100",
  },
];

export default function DataSecurity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-400 uppercase tracking-wide mb-4">
            Security First
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your patients&apos; data protected with{" "}
            <span className="text-green-400">end-to-end encryption.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We treat data security as a medical responsibility. Everything we
            build is designed around protecting your patients first.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`p-7 rounded-2xl border ${pillar.borderColor} bg-white/5 backdrop-blur`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-5`}
                >
                  <Icon size={24} />
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">
                    {pillar.stat}
                  </span>
                  <span className="text-gray-400 text-sm">{pillar.statLabel}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance badges row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {["DPDP Act 2023", "NMC Compliant", "HIPAA Aligned", "ISO 27001", "CERT-In Registered"].map(
            (badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-semibold"
              >
                ✓ {badge}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
