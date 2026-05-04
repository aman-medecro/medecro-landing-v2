"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const rows = [
  {
    generic: "Records diagnosis after the fact",
    medecro: "AI assists diagnosis in real time",
  },
  {
    generic: "Manual appointment reminders",
    medecro: "Predictive no-show prevention",
  },
  {
    generic: "Static billing module",
    medecro: "Auto-coded claims with AI audit",
  },
  {
    generic: "One-size-fits-all templates",
    medecro: "Specialty-native clinical flows",
  },
  {
    generic: "AI bolted on top",
    medecro: "AI-native from the ground up",
  },
  {
    generic: "Doctors adapt to software",
    medecro: "Software adapts to how doctors think",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="font-[family-name:var(--font-outfit)] font-bold text-[#0316FF] uppercase mb-4 block text-[11px] leading-[17.6px] tracking-[1.65px]">
              The Difference
            </span>
            <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] mb-5 text-[34px] sm:text-[44px] lg:text-[56px] leading-tight lg:leading-[64px] tracking-[-1px]">
              Most software manages your clinic. Medecro{" "}
              <em className="not-italic italic font-normal text-[#0316FF]">
                thinks
              </em>{" "}
              with it.
            </h2>
            <p className="font-[family-name:var(--font-outfit)] font-normal text-[#6C6C6C] mb-8 max-w-sm text-base sm:text-[18px] leading-relaxed sm:leading-[27.2px] mx-auto lg:mx-0">
              Generic EMRs record what happened. Medecro&apos;s Intelligence OS
              processes clinical signals, surfaces insights, and automates the
              decisions that currently live inside your head — so you focus
              entirely on the patient in front of you.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0316FF] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                See the Intelligence Layer →
              </Link>
            </div>
          </div>

          {/* Right — comparison table */}
          <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-2">
              <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#FF503C1A]">
                <span className="font-[family-name:var(--font-dm-sans)] font-bold text-[#FF6050] uppercase text-[10px] tracking-[1.2px]">
                  Generic EMR
                </span>
              </div>
              <div className="px-5 py-3 border-b border-[#E2E8F0] bg-[#0316FF26]">
                <span className="font-[family-name:var(--font-dm-sans)] font-bold text-[#0316FF] uppercase text-[10px] tracking-[1.2px]">
                  Medecro AI
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b last:border-b-0 border-[#FFFFFF14]"
              >
                <div className="px-5 py-3.5 text-sm text-[#64748B] bg-[#FF503C08]">
                  {row.generic}
                </div>
                <div className="px-5 py-3 bg-[#EEF2FF] flex items-center gap-2">
                  <Check size={13} className="text-[#16A34A] flex-shrink-0" strokeWidth={3} />
                  <span className="text-sm font-semibold text-[#0F172A]">
                    {row.medecro}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
