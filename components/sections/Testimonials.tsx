"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Medecro cut my administrative burden by 70%. I now spend 2 extra hours with patients daily. The AI diagnostic suggestions have caught things I might have missed during busy OPD hours.",
    name: "Dr. Arjun Mehta",
    title: "Senior Cardiologist",
    clinic: "Mehta Heart Clinic, Mumbai",
    rating: 5,
    initial: "A",
    color: "from-blue-500 to-blue-600",
  },
  {
    quote:
      "As a dermatologist, I was sceptical about AI. But Medecro's photo tracking and condition comparison is genuinely useful. My patients love the before-after comparisons I can now show them.",
    name: "Dr. Priya Nair",
    title: "Dermatologist",
    clinic: "Skin & Glow Clinic, Bangalore",
    rating: 5,
    initial: "P",
    color: "from-purple-500 to-purple-600",
  },
  {
    quote:
      "Running 3 dental clinics was a nightmare before Medecro. Now I get a unified view of all three on my phone. The billing automation alone saves ₹15,000 a month in accountant fees.",
    name: "Dr. Rahul Sharma",
    title: "Dental Surgeon",
    clinic: "SmilePoint Dental, Delhi",
    rating: 5,
    initial: "R",
    color: "from-green-500 to-green-600",
  },
];

export default function Testimonials() {
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
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-semibold text-amber-600 uppercase tracking-wide mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Doctors who finally have software{" "}
            <span className="text-[#2563EB]">that thinks like them.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-[#0F172A] text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-sm">{t.initial}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A] text-sm">{t.name}</div>
                  <div className="text-xs text-[#64748B]">{t.title}</div>
                  <div className="text-xs text-[#64748B]">{t.clinic}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
