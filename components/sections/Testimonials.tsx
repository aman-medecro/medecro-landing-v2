"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "The AI X-ray analysis is unlike anything I've seen. It catches things I'd have caught in my third look — on the first pass. My diagnostic confidence has gone up considerably.",
    name: "Dr. Priya Sharma",
    specialty: "Dental",
    specialtyColor: "text-[#16A34A]",
    clinic: "Pearl Dental Care, Hyderabad",
    initials: "PS",
    avatarBg: "bg-[#DDD6FE]",
    avatarText: "text-[#5B21B6]",
  },
  {
    quote:
      "I see 40+ patients a day. Before Medecro, my team spent 2 hours on reminders alone. Now it's fully automated and my no-show rate dropped by nearly half.",
    name: "Dr. Suresh Kumar",
    specialty: "GPIM",
    specialtyColor: "text-[#16A34A]",
    clinic: "City Health Clinic, Mumbai",
    initials: "SK",
    avatarBg: "bg-[#BBF7D0]",
    avatarText: "text-[#166534]",
  },
  {
    quote:
      "The Rx pad was built with psychiatrists — not repurposed from GP templates. SNOMED mapping, session notes, PHQ-9 scoring. It finally feels native to how I work.",
    name: "Dr. Anita Rajan",
    specialty: "Psychiatry",
    specialtyColor: "text-[#7C3AED]",
    clinic: "Wellness First OPD, Kolkata",
    initials: "AR",
    avatarBg: "bg-[#DDD6FE]",
    avatarText: "text-[#5B21B6]",
  },
  
];

const Stars = () => (
  <div className="flex gap-1 mb-4 sm:mb-5">
    {Array.from({ length: 5 }).map((_, s) => (
      <svg key={s} className="w-4 h-4 fill-[#16A34A]" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const [trackX, setTrackX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const calcOffset = useCallback(() => {
    const container = containerRef.current;
    const card = cardRefs.current[active];
    if (!container || !card) return;
    const containerW = container.offsetWidth;
    const cardW = card.offsetWidth;
    const cardLeft = card.offsetLeft;
    setTrackX(-cardLeft + (containerW - cardW) / 2);
  }, [active]);

  useEffect(() => {
    calcOffset();
    window.addEventListener("resize", calcOffset);
    return () => window.removeEventListener("resize", calcOffset);
  }, [calcOffset]);

  const next = () => setActive((i) => Math.min(i + 1, testimonials.length - 1));
  const prev = () => setActive((i) => Math.max(i - 1, 0));

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F5F3FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="block font-bold uppercase text-[#0316FF] mb-4 text-[11px] leading-[17.6px] tracking-[1.65px]">
            Customer Stories
          </span>
          <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] text-[28px] sm:text-[36px] lg:text-5xl leading-tight tracking-[-1px] mb-5">
            Doctors who finally have software
            <br className="hidden lg:block" />
            that thinks like them.
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-[1.7] max-w-md mx-auto">
            Real quotes from real doctors. Healthcare decisions are peer-influenced — hear from those who made the switch.
          </p>
        </div>

        {/* Mobile / Tablet — drag carousel */}
        <div className="lg:hidden mb-4">
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex gap-4 cursor-grab active:cursor-grabbing select-none"
              animate={{ x: trackX }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, { offset, velocity }) => {
                if (offset.x < -40 || velocity.x < -300) next();
                else if (offset.x > 40 || velocity.x > 300) prev();
              }}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="flex flex-col bg-[#EDE9FE] rounded-2xl p-6 sm:p-7 shrink-0 w-[78vw] sm:w-[55vw] pointer-events-none"
                  animate={{
                    scale: i === active ? 1 : 0.9,
                    opacity: i === active ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Stars />
                  <p className="flex-1 text-[#0F172A] text-sm leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center shrink-0`}>
                      <span className={`${t.avatarText} font-bold text-xs`}>{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A] text-sm">{t.name}</p>
                      <p className={`text-xs font-semibold ${t.specialtyColor}`}>{t.specialty}</p>
                      <p className="text-xs text-[#64748B]">{t.clinic}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-5 bg-[#18A600]" : "w-2 bg-[#CBD5E1]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop — 3-col grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mb-10">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col bg-[#EDE9FE] rounded-2xl p-7">
              <Stars />
              <p className="flex-1 text-[#0F172A] text-sm leading-relaxed mb-7">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center shrink-0`}>
                  <span className={`${t.avatarText} font-bold text-xs`}>{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-sm">{t.name}</p>
                  <p className={`text-xs font-semibold ${t.specialtyColor}`}>{t.specialty}</p>
                  <p className="text-xs text-[#64748B]">{t.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="#stories" className="text-[#0316FF] font-semibold text-sm hover:underline">
            See More Stories →
          </Link>
        </div>

      </div>
    </section>
  );
}
