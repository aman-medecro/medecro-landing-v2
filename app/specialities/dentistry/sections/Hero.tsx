import Link from "next/link";
import Image from "next/image";

export default function DentistryHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F0F2F5] pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 sm:-left-40 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-full bg-blue-100/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 sm:-right-40 w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] rounded-full bg-slate-100/40 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 sm:py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center">

          {/* ── Text ── */}
          <div className="flex flex-col items-center lg:items-start">

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] mb-4 sm:mb-5 text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.08] tracking-tight text-center lg:text-left">
              <span className="font-bold not-italic block">AI-powered dental</span>
              <span className="font-bold not-italic block">Clinic Management</span>
              <span className="font-normal italic text-[#2563EB] block">Software</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-[16px] text-[#64748B] leading-relaxed mb-6 sm:mb-8 text-center lg:text-left max-w-sm sm:max-w-xl lg:max-w-md">
              Run your dental practice with intelligent workflows, AI dental
              X&#8209;ray analysis, smart patient management, and automated
              billing — designed for Indian dentists.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-blue-500/20"
            >
              Book Demo
              <Image src="/demo-arrow.svg" alt="" width={14} height={14} />
            </Link>
          </div>

          {/* ── Clean white card ── */}
          <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl bg-white shadow-xl sm:shadow-2xl shadow-slate-200/80" />

        </div>
      </div>
    </section>
  );
}
