"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/faq-data";

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Questions doctors ask most.
          </h2>
          <p className="text-[#64748B] text-lg">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#contact" className="text-[#2563EB] hover:underline font-medium">
              Chat with our team.
            </a>
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`item-${i}`}
                className="border border-[#E2E8F0] rounded-xl px-5 data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-[#0F172A] py-4 hover:no-underline hover:text-[#2563EB] data-[state=open]:text-[#2563EB]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#64748B] leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
