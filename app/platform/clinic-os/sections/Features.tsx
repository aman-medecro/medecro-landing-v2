import Image from "next/image";

const features = [
  {
    icon: "/whatsapp.svg",
    iconBg: "bg-[#18A6001A]",
    title: "Complete patient history at your fingertips",
    description:
      "Centralise every patient's records — in one place, anytime, anywhere. Patient history and treatment plans accessible for your entire clinic team.",
    bullets: [
      "Centralised patient history with instant staff access",
      "AI-generated digital reports for sharing & record-keeping",
      "Patient turnaround time reduced under 15 minutes",
      "8.5 lakh+ medicine database with smart suggestions",
      "Multi-speciality support across departments",
    ],
  },
  {
    icon: "/smart-phone-01.svg",
    iconBg: "bg-[#025ED714]",
    title: "Keep your chair full, never double-booked",
    description:
      "Smart AI scheduling that prevents conflicts, sends automatic WhatsApp & SMS reminders, and syncs in real-time across your entire clinic and reception desk.",
    bullets: [
      "AI conflict detection prevents double bookings",
      "Auto confirmations via WhatsApp, SMS, and in-app",
      "Flexible rescheduling with instant calendar sync",
      "Real-time updates across staff & reception dashboards",
    ],
  },
  {
    icon: "/bell.svg",
    iconBg: "bg-[#F8993914]",
    title: "Zero missed patients, zero manual chasing",
    description:
      "A dedicated follow-up dashboard tracks every patient who needs attention. Reach them via pre-built WhatsApp/SMS templates — so your staff never has to chase anyone manually again.",
    bullets: [
      "Complete follow-up dashboard to track all pending call-ins",
      "Pre-built WhatsApp templates — follow-up in seconds",
      "Communication audit trails for accountability",
      "Auto segmentation by surgery and treatment type",
    ],
  },
  {
    icon: "/chatting-01.svg",
    iconBg: "bg-[#E100FF1A]",
    title: "Billing that practically runs itself",
    description:
      "Automated one-click billing tools — from advance payments to instant collection. Your accountant will thank you for the clean end-of-day performance every time you close.",
    bullets: [
      "Customisable invoice templates for faster billing cycles",
      "Secure payment gateway with multiple options (UPI, card, cash)",
      "Comprehensive financial dashboard with real-time insights",
      "Automated end-of-day settlements and reports",
    ],
  },
];

export default function ClinicOSFeatures() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
            Complete 360° System
          </p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-2xl sm:text-3xl lg:text-[46px] font-bold leading-tight mb-3 sm:mb-4">
            Everything your clinic needs
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] font-normal text-[15px] sm:text-[16.8px] leading-[26px] sm:leading-[27.72px] text-center text-[#6C6C6C] max-w-xl mx-auto">
            Simplify daily operations, reduce admin time, and deliver better care
            with India&apos;s most advanced AI clinic management system.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-20">
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
                    <Image src={icon} alt={title} width={24} height={24} />
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-xl sm:text-2xl lg:text-[28px] font-bold leading-snug mb-2 sm:mb-3">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                    {description}
                  </p>

                  {/* Mobile-only image — between description and bullets */}
                  <div className="lg:hidden relative w-full aspect-[16/10] rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-md overflow-hidden flex items-center justify-center mb-4 sm:mb-5">
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
                <div className="hidden lg:flex relative w-full aspect-[4/3] rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-md overflow-hidden items-center justify-center">
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
