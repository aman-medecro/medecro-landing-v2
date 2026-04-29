"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faq-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="block font-bold uppercase text-[#0316FF] mb-4 text-[11px] leading-[17.6px] tracking-[1.65px]">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] text-[28px] sm:text-[36px] lg:text-[44px] leading-tight tracking-[-1px] mb-4">
            Questions doctors ask most.
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            Straight answers on what Medecro.ai is, what it does, and how it&apos;s different.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-[#F8FAFC] rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-[#0F172A] text-sm font-medium pr-4">
                  {item.question}
                </span>
                <span className="text-[#0316FF] text-xl font-light leading-none shrink-0">
                  {openIndex === i ? "×" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-[#64748B] text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
