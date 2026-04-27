import Image from "next/image";
import { Flag, ShieldCheck, ClipboardList } from "lucide-react";

const cards = [
  {
    icon: <Image src="/locked.svg" alt="locked" height={24} width={24} />,
    title: "AES-256 Encryption",
    description:
      "All patient records including X-rays, charts, and treatment history encrypted at rest and in transit. No plaintext data stored.",
  },
  {
    icon: <Flag size={22} className="text-[#64748B]" strokeWidth={1.5} />,
    title: "India Data Residency",
    description:
      "All records stored exclusively in Indian data centres. Patient data never leaves India — compliant with DPDP Act.",
  },
  {
    icon: <ShieldCheck size={22} className="text-[#64748B]" strokeWidth={1.5} />,
    title: "X-ray Data Privacy",
    description:
      "Dental images shared with patient-level access control. Only your clinic can view patient X-rays. No sharing with third parties.",
  },
  {
    icon: <ClipboardList size={22} className="text-[#64748B]" strokeWidth={1.5} />,
    title: "Audit Trail",
    description:
      "Every access to patient records logged immutably. Complete compliance trail for medico-legal scenarios.",
  },
];

const badges = [
  { label: "HIPAA-Ready", done: true },
  { label: "India Data Residency", done: true },
  { label: "AES-256 Encryption", done: true },
  { label: "DPDP Act Compliant", done: true },
  { label: "SOC 2 Type II (In Progress)", done: false },
];

export default function DataSecurity() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#EEF2F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="block font-bold uppercase text-[#2563EB] mb-4 text-[11px] leading-[17.6px] tracking-[1.65px]">
            Security &amp; Compliance
          </span>
          <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] mb-4 text-[28px] sm:text-[36px] lg:text-[48px] leading-tight tracking-[-1px]">
            Your patients&apos; data protected with{" "}
            <span className="text-[#16A34A] italic">end-to-end encryption.</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            X-rays, treatment records, and billing data encrypted end to end.
            Clinics across India trust Medecro with their most sensitive clinical data.
          </p>
        </div>

        {/* Cards — 2-col on mobile/tablet, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-md border border-[#E2E8F0] p-4 sm:p-6"
            >
              <div className="mb-3 sm:mb-4">{card.icon}</div>
              <h3 className="font-bold text-[#0F172A] mb-2 text-[13px] sm:text-sm leading-snug">
                {card.title}
              </h3>
              <p className="text-[#64748B] text-[12px] sm:text-[13px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-full px-3 sm:px-4 py-1.5 text-xs font-medium text-[#0F172A]"
            >
              {badge.done ? (
                <span className="text-[#16A34A] font-bold text-sm leading-none">✓</span>
              ) : (
                <Image src="/circle.svg" alt="circle" width={24} height={24} className="w-3 h-3 rounded-full shrink-0" />
              )}
              {badge.label}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
