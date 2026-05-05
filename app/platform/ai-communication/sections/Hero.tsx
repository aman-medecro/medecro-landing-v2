import Link from "next/link";
import Image from "next/image";


export default function AICommunicationHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F7FA] pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 sm:-left-40 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 sm:-right-40 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-full bg-green-100/20 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 sm:py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">

          {/* ── Text ── */}
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Headline */}
            <h1 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] mb-4 sm:mb-5 text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.05] text-center lg:text-left">
              <span className="font-normal italic text-[#2563EB]">Intelligent</span>
              <span className="font-bold not-italic"> patient communication,</span>
              <span className="font-bold not-italic block">built for Indian clinics</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed mb-6 sm:mb-8 text-center lg:text-left max-w-sm sm:max-w-xl lg:max-w-lg">
              AI handles appointment reminders, follow-ups, and post-treatment care instructions
              across WhatsApp and SMS — automatically. No manual effort. No missed patients.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
            >
              Book Demo
              <Image src="/demo-arrow.svg" alt="" width={14} height={14} />
            </Link>
          </div>

          {/* ── Image placeholder ── */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/40 to-[#ECFDF5]/40" />
            <p className="relative text-sm text-[#94A3B8] font-medium">[ Product screenshot ]</p>
          </div>

        </div>
      </div>
    </section>
  );
}
