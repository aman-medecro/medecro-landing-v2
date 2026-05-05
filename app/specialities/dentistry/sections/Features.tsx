import { Check, Scan, FileText, Grid2x2, CalendarDays, Receipt, MessageSquare, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: (
        <Image src={"/database.svg"} alt="whatsapp" width={24} height={24} />
    ),
    iconBg: "bg-[#18A6001A]",
    title: "AI dental X-ray analyser",
    description:
      "Instant, high-accuracy detection of caries, restorations, RCT, and bone loss. Trained on thousands of Indian dental X-rays.",
    bullets: [
      "Auto detects 22+ dental conditions with confidence scores",
      "One-click treatment plan generation from AI findings",
      "Patient-friendly visual report in one tap",
      "PACS-compatible · Periapical + panoramic support",
    ],
  },
  {
    icon: (
        <Image src={"/stethoscope.svg"} alt="whatsapp" width={24} height={24} />
    ),
    iconBg: "bg-[#025ED714]",
    title: "Smart dental Rx-pad",
    description:
      "The first prescription pad built specifically for dentists — with SNOMED mapping, dental charting, and printable templates.",
    bullets: [
      "SNOMED / ICD-10 dental integration built-in",
      "Dental history auto-populated from chart",
      "Configurable Rx templates per doctor",
      "Complete Rx in under 10 seconds",
    ],
  },
  {
    icon: (
        <Image src={"/prescription.svg"} alt="whatsapp" width={24} height={24} />
    ),
    iconBg: "bg-[#F8993914]",
    title: "Interactive dental charting",
    description:
      "32-tooth dual-arch interactive chart. Click any tooth to record findings, treatments, and notes.",
    bullets: [
      "32 teeth interactive dual-arch view",
      "AI X-ray findings auto-mapped to chart",
      "Treatment history per tooth across visits",
      "Colour coded condition mapping",
    ],
  },
  {
    icon: (
        <Image src={"/stars.svg"} alt="whatsapp" width={24} height={24} />
    ),
    iconBg: "bg-violet-50",
    title: "Smart dental appointments",
    description:
      "Intelligent scheduling designed for dental practices — procedure-based duration, chair management, and smart reminders.",
    bullets: [
      "Procedure-based short duration",
      "Multi-chair scheduling view",
      "Automated WhatsApp appointment reminders",
      "Predictive no-show prevention alert",
    ],
  },
  {
    icon: (
        <Image src={"/prescription.svg"} alt="whatsapp" width={24} height={24} />
    ),
    iconBg: "bg-[#F8993914]",
    title: "Billing and Revenue",
    description:
      "Complete billing suite with accurate payment tracking, refund management, and easy consultation flows.",
    bullets: [
      "Advance payment tracking",
      "Refund management",
      "Easy billing consultation flow",
      "Treatment-based invoice generation",
    ],
  },
  {
    icon: (
        <Image src={"/stars.svg"} alt="whatsapp" width={24} height={24} />
    ),
    iconBg: "bg-sky-50",
    title: "Patient communication",
    description:
      "AI-drafted messages for appointment confirmations, post-treatment care, and recall reminders across WhatsApp and SMS.",
    bullets: [
      "Automated WhatsApp appointment reminder",
      "Post-treatment type reminder delivery",
      "AI-drafted messages — no manual typing",
      "Email reminder automation",
    ],
  },
];

export default function DentistryFeatures() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0316FF] mb-3 sm:mb-4">
            Platform Modules — Dentistry
          </p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.1] tracking-tight">
            <span className="font-bold not-italic">
              Everything your dental practice
              <br />
              needs.{" "}
            </span>
            <span className="font-normal italic text-[#0316FF]">
              Nothing it doesn&apos;t.
            </span>
          </h2>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
          {features.map(({ icon, iconBg, title, description, bullets }, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Text side */}
                <div className="flex flex-col">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4 sm:mb-5`}>
                    {icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-xl sm:text-2xl lg:text-[28px] font-bold mb-2 sm:mb-3">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                    {description}
                  </p>

                  {/* Mobile-only image — between description and bullets */}
                  <div className="lg:hidden relative w-full aspect-[16/10] rounded-2xl bg-white border border-[#E2E8F0] shadow-md overflow-hidden flex items-center justify-center mb-4 sm:mb-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/30 to-[#ECFDF5]/30" />
                    <p className="relative text-xs text-[#CBD5E1]">[ {title} screenshot ]</p>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2.5 sm:gap-3">
                    {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-[#334155]">
                        <span className="w-5 h-5 rounded-full bg-[#E6FBF7] flex items-center justify-center shrink-0 mt-0.5">
                        <Image src="/check.svg" alt="check" width={10} height={10} />
                        </span>
                        {b}
                    </li>
                    ))}
                  </ul>
                </div>

                {/* Desktop-only image column */}
                <div className="hidden lg:flex relative w-full aspect-[4/3] rounded-2xl bg-white border border-[#E2E8F0] shadow-md overflow-hidden items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/30 to-[#ECFDF5]/30" />
                  <p className="relative text-xs text-[#CBD5E1]">[ {title} screenshot ]</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
