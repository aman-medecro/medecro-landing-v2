"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const specialityOptions = [
  "General Practice",
  "Cardiology",
  "Dermatology",
  "Dental",
  "Orthopaedics",
  "Gynaecology",
  "Ophthalmology",
  "Paediatrics",
];

export default function SpecialityFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-5">
              Get your speciality&apos;s{" "}
              <span className="text-[#16A34A]">native flow first.</span>
            </h2>
            <p className="text-[#64748B] text-lg mb-6">
              Tell us your speciality and we&apos;ll configure Medecro out of
              the box for your exact workflow. No setup needed, no generic
              templates — just clinical intelligence designed for how you
              practise.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                "Pre-built templates for your speciality",
                "AI trained on specialty-specific patterns",
                "Custom billing codes for your procedures",
                "Onboarding tailored to your clinic size",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#0F172A]">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-[10px] font-bold">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: animated speciality selector */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="p-7 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-sm">
              <h3 className="font-bold text-[#0F172A] mb-2">
                What&apos;s your speciality?
              </h3>
              <p className="text-xs text-[#64748B] mb-5">
                Select yours to see a demo configured for you.
              </p>

              {!submitted ? (
                <>
                  <div className="grid grid-cols-2 gap-2.5 mb-5">
                    {specialityOptions.map((spec) => (
                      <button
                        key={spec}
                        onClick={() => setSelected(spec)}
                        className={`px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all duration-200 border ${
                          selected === spec
                            ? "bg-[#2563EB] text-white border-[#2563EB] shadow-sm"
                            : "bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#2563EB]/30 hover:text-[#0F172A]"
                        }`}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                    />
                    <button
                      onClick={() => selected && setSubmitted(true)}
                      disabled={!selected}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      Get my speciality demo
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h4 className="font-bold text-[#0F172A] mb-2">
                    You&apos;re on the list!
                  </h4>
                  <p className="text-sm text-[#64748B]">
                    We&apos;ll reach out within 24 hours with your{" "}
                    <strong className="text-[#2563EB]">{selected}</strong> demo.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
