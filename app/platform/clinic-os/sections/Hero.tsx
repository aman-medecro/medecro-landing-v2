import Link from "next/link";
import Image from "next/image";

export default function ClinicOSHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F7FA] pt-16">
      {/* Background blobs — scaled down on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 sm:-left-40 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 sm:-right-40 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-full bg-green-100/20 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Headline */}
            <h1 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] mb-4 sm:mb-5 text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.05]">
              <span className="font-bold not-italic block">Run your clinic on,</span>
              <span className="font-normal italic text-[#2563EB] block">Autopilot</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed mb-7 sm:mb-8 max-w-md lg:max-w-lg">
              Medecro.ai is India&apos;s first 360° AI-powered clinic management platform — from
              appointments and prescriptions to billing and follow-ups. Built for every speciality,
              every practice.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
            >
              Book Demo
              <Image src="/demo-arrow.svg" alt="" width={14} height={14} />
            </Link>
          </div>

          {/* ── Right: image placeholder ── */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/40 to-[#ECFDF5]/40" />
            <p className="relative text-sm text-[#94A3B8] font-medium">[ Product screenshot ]</p>
          </div>

        </div>
      </div>
    </section>
  );
}
