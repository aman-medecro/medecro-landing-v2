import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: (
      <Image src={"/whatsapp.svg"} alt="whatsapp" width={24} height={24}   />
    ),
    iconBg: "bg-[#18A6001A]",
    title: "WhatsApp Communication",
    description:
      "Send reminders, confirmations, and care plans directly on WhatsApp — the app Indian patients actually use every day.",
    bullets: [
      "Automated appointment and prescription confirmations",
      "Two-way patient communication channel for full continuity",
      "Pre-visit and post-treatment message templates",
      "Zero no-shows — no promotional bulk-SMS services",
    ],
  },
  {
    icon: (
      <Image src={"/smart-phone-01.svg"} alt="whatsapp" width={24} height={24}   />
    ),
    iconBg: "bg-[#025ED714]",
    title: "SMS Alerts",
    description:
      "Guaranteed delivery to every mobile number in India — no smartphone required on the patient's end.",
    bullets: [
      "Guaranteed delivery across all patient phones",
      "Personalised SMS for OTP, billing, and lab reports",
      "DLT-registered — instant delivery via licensed routes",
      "Fully WhatsApp and Meta fallback sending",
    ],
  },
  {
    icon: (
      <Image src={"/bell.svg"} alt="whatsapp" width={24} height={24}   />
    ),
    iconBg: "bg-[#F8993914]",
    title: "Follow-up Reminders",
    description:
      "Never let a patient forget their next visit. AI automatically sends follow-ups at the right time after every appointment.",
    bullets: [
      "Personalised copy-of-care after treatment plans",
      "Contextualised positive-outcome reminders",
      "Configurable windows — 1-day, 7-day, 1-year",
      "Track delivery and responses from your dashboard",
    ],
  },
  {
    icon: (
       <Image src={"/chatting-01.svg"} alt="whatsapp" width={24} height={24}   />
    ),
    iconBg: "bg-[#E100FF1A]",
    title: "Bulk Messaging",
    description:
      "Engage your patients and reach hundreds in one go — for campaigns, treatment protocols, or health alerts.",
    bullets: [
      "Segment by treatment type, visit history, or recall distance",
      "Pre-approved templates across WhatsApp, Instagram, Facebook, and Email",
      "Exclude numbers easily with built-in opt-out management",
      "Track delivery, open rates, and patient engagement from one dashboard",
    ],
  },
  {
    icon: (
      <Image src={"/stars.svg"} alt="whatsapp" width={24} height={24}   />
    ),
    iconBg: "bg-[#E100FF1A]",
    title: "AI Marketing Studio",
    description:
      "Medecro's content & digital presence engine — AI-generated content, branded and ready to publish without a marketing team.",
    bullets: [
      "Single-click posts for Instagram, Twitter, and Google My Business",
      "AI-generated hashtags and copy tailored for your clinic",
      "AI-branded ad copy for Facebook, carousels, and drafts",
      "Portfolio page auto-sync with your patient speciality data",
    ],
  },
];

export default function AICommunicationFeatures() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
            COMMUNICATION FEATURES
          </p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight mb-4">
            All-in-one platform to<br className="hidden sm:block" /> streamline your practice
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg max-w-xl mx-auto">
            Built for the way Indian clinics actually work — across WhatsApp,
            SMS, and automated follow-ups.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-16">
          {features.map(({ icon, iconBg, title, description, bullets }, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Text side */}
                <div className="flex flex-col">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                    {icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-2xl sm:text-[28px] font-bold mb-3">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-3">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-[#334155]">
                        <CheckCircle2 size={17} className="text-[#10B981] bg-[#E6FBF7] shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image placeholder */}
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-[#E2E8F0] shadow-md overflow-hidden flex items-center justify-center">
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
