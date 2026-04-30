import Link from "next/link";
import Image from "next/image";

const clinics = [
  { initials: "PD", name: "Pearl Dental Care", color: "bg-purple-500" },
  { initials: "AH", name: "Aarahi Dental Hub", color: "bg-green-500" },
  { initials: "IS", name: "Ivory Smiles Centre", color: "bg-blue-500" },
  { initials: "KD", name: "Kapoor Dental Clinic", color: "bg-red-500" },
  { initials: "CH", name: "City Health Clinic", color: "bg-teal-500" },
  { initials: "WF", name: "Wellness First OPD", color: "bg-orange-500" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-16 overflow-hidden bg-[#F5F7FA]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-green-100/20 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 text-center">
        {/* Headline */}
        <h1 className="font-[family-name:var(--font-fraunces)] leading-none text-[#0F172A] mb-5 text-[38px] sm:text-[52px] lg:text-[64px]">
          <span className="font-bold not-italic block">Clinical Intelligence,</span>
          <span className="font-normal italic block text-[#0316FF]">
            Reimagined
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8 max-w-2xl mx-auto px-2">
          Medecro.ai is the AI intelligence layer that runs beneath every clinical workflow
          — from diagnosis to the last follow-up, built natively for each speciality.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20 text-sm"
          >
            Book Demo
            <Image src="/demo-arrow.svg" alt="" width={14} height={14} className="w-4 h-4" />
          </Link>
        </div>

        {/* Product mockup placeholder */}
        <div className="w-full rounded-2xl bg-[#D1D5DB] aspect-video shadow-xl" />

        {/* Trusted by clinics */}
        <div className="mt-10 pb-16">
          <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-5">
            Trusted by clinics across India
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3">
            {clinics.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2.5 bg-white border border-[#E2E8F0] rounded-full px-3 py-2 shadow-sm"
              >
                <div className={`w-7 h-7 rounded-full ${c.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[10px] font-bold text-white">{c.initials}</span>
                </div>
                <span className="text-sm text-[#374151] font-medium pr-1 whitespace-nowrap">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
