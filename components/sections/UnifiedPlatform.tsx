"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  CreditCard,
  FileText,
  BarChart3,
  Pill,
  FlaskConical,
  Users,
  Bell,
  Smartphone,
  Shield,
  Video,
  MessageSquare,
} from "lucide-react";

const platformFeatures = [
  { icon: Calendar, label: "Appointments", color: "bg-blue-50 text-blue-600" },
  { icon: CreditCard, label: "Billing", color: "bg-green-50 text-green-600" },
  { icon: FileText, label: "EMR", color: "bg-purple-50 text-purple-600" },
  { icon: BarChart3, label: "Reports", color: "bg-amber-50 text-amber-600" },
  { icon: Pill, label: "Pharmacy", color: "bg-red-50 text-red-600" },
  { icon: FlaskConical, label: "Lab", color: "bg-cyan-50 text-cyan-600" },
  { icon: Users, label: "Staff Mgmt", color: "bg-indigo-50 text-indigo-600" },
  { icon: Bell, label: "Reminders", color: "bg-pink-50 text-pink-600" },
  { icon: Smartphone, label: "Mobile App", color: "bg-teal-50 text-teal-600" },
  { icon: Shield, label: "Compliance", color: "bg-emerald-50 text-emerald-600" },
  { icon: Video, label: "Teleconsult", color: "bg-violet-50 text-violet-600" },
  { icon: MessageSquare, label: "Patient Chat", color: "bg-orange-50 text-orange-600" },
];

export default function UnifiedPlatform() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-100 text-xs font-semibold text-[#16A34A] uppercase tracking-wide mb-4">
            All-in-one platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Everything under one roof.
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            From the moment a patient calls to the moment they walk out, every
            touchpoint is managed inside Medecro. No integrations required.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {platformFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={
                  inView ? { opacity: 1, y: 0, scale: 1 } : {}
                }
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${feat.color} group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon size={22} />
                </div>
                <span className="text-xs font-semibold text-[#0F172A] text-center leading-snug">
                  {feat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] text-white font-semibold hover:bg-gray-800 transition-colors text-sm"
          >
            Explore all modules →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
