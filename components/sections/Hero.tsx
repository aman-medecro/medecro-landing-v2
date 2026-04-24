"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const headlineWords = ["Clinical", "Intelligence,", "Reimagined"];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/40">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-green-100/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-50/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wide">
                AI-Powered Clinical Intelligence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0F172A] mb-6"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {headlineWords.map((word) => (
                <motion.span
                  key={word}
                  variants={wordVariant}
                  className={`inline-block mr-3 ${
                    word === "Reimagined"
                      ? "italic text-[#16A34A]"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg text-[#64748B] leading-relaxed mb-8 max-w-lg"
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              The only platform that doesn&apos;t just manage your clinic — it
              thinks with it. AI diagnostics, smart billing, and EMR built
              natively for Indian doctors across every speciality.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              custom={0.7}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Start Free Trial
                <ArrowRight size={16} />
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] font-semibold hover:bg-gray-50 transition-colors">
                <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center">
                  <Play size={10} fill="white" className="text-white ml-0.5" />
                </div>
                Watch Demo
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="flex items-center gap-4 mt-8 pt-8 border-t border-[#E2E8F0]"
              custom={0.9}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-[10px] text-white font-bold">Dr</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-3.5 h-3.5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[#64748B]">
                  <strong className="text-[#0F172A]">2,000+ doctors</strong>{" "}
                  trust Medecro
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column – product mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-[#E2E8F0] bg-white">
              {/* Mock browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-[#E2E8F0]">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4 h-6 rounded bg-gray-200/60 flex items-center px-3">
                  <span className="text-xs text-gray-400">app.medecro.ai/dashboard</span>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 bg-white min-h-[380px]">
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="h-4 w-32 bg-gray-100 rounded mb-1.5" />
                    <div className="h-3 w-20 bg-gray-50 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-20 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20" />
                    <div className="h-8 w-8 rounded-lg bg-gray-100" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Appointments", value: "24", color: "bg-blue-50 border-blue-100" },
                    { label: "Revenue", value: "₹48K", color: "bg-green-50 border-green-100" },
                    { label: "Pending", value: "3", color: "bg-amber-50 border-amber-100" },
                  ].map((stat) => (
                    <div key={stat.label} className={`rounded-xl p-3 border ${stat.color}`}>
                      <div className="text-xs text-[#64748B] mb-1">{stat.label}</div>
                      <div className="text-xl font-bold text-[#0F172A]">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Patient list */}
                <div className="space-y-2.5">
                  {[
                    { name: "Priya Sharma", time: "10:00 AM", tag: "Confirmed" },
                    { name: "Rahul Mehta", time: "10:30 AM", tag: "AI Report" },
                    { name: "Anjali Patel", time: "11:00 AM", tag: "Lab Ready" },
                  ].map((patient) => (
                    <div
                      key={patient.name}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-gray-50 border border-[#E2E8F0]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">
                            {patient.name[0]}
                          </span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-[#0F172A]">
                            {patient.name}
                          </div>
                          <div className="text-[10px] text-[#64748B]">
                            {patient.time}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                          patient.tag === "AI Report"
                            ? "bg-blue-100 text-blue-700"
                            : patient.tag === "Lab Ready"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {patient.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* AI insight bar */}
                <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] text-white font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#2563EB] mb-0.5">
                      AI Insight
                    </div>
                    <div className="text-[11px] text-[#64748B]">
                      Rahul Mehta&apos;s HbA1c is elevated — consider diabetes
                      protocol.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-[#E2E8F0] px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#0F172A]">
                  SOC2 Compliant
                </div>
                <div className="text-[10px] text-[#64748B]">
                  End-to-end encrypted
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-[#E2E8F0] px-4 py-3"
            >
              <div className="text-xs font-semibold text-[#0F172A]">
                90% Time Saved
              </div>
              <div className="text-[10px] text-[#16A34A] font-medium">
                vs. traditional software
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
