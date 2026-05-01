import Image from "next/image";

const features = [
  {
    icon: "/whatsapp.svg",
    iconBg: "bg-[#18A6001A]",
    title: "Trained on India's largest Dental dataset",
    description:
      "The only AI model trained and validated specifically on Indian dental X-rays — accounting for jaw anatomy, diet patterns, and imaging equipment variations.",
    bullets: [
      "Calibrated for Indian jaw anatomy variations",
      "Regional dietary pattern calibration built-in",
      "Validated across OPG and periapical X-rays",
      "Continuously refined on new clinical cases",
    ],
  },
  {
    icon: "/smart-phone-01.svg",
    iconBg: "bg-[#025ED714]",
    title: "Turn X-rays into treatment acceptance",
    description:
      "Patients who see their findings visually are far more likely to say yes to treatment. Medecro generates a patient-friendly report in one tap — no lengthy explanation needed from the dentist.",
    bullets: [
      "Visual findings instantly shared with score",
      "Hindi + English output supported",
      "Shareable via WhatsApp in a single tap",
      "Linked directly to the patient's treatment plan",
    ],
  },
  {
    icon: "/bell.svg",
    iconBg: "bg-[#F8993914]",
    title: "Clinical reports, written automatically",
    description:
      "Stop writing the same findings for hundreds of patients. Medecro generates a structured, formatted report for each X-ray analysis in seconds — ready to print or attach to insurance workflows.",
    bullets: [
      "Structured, AI-filled report with validation score",
      "Printable PDF with your clinic's branding",
      "Automatically saved to the patient's record",
      "Accepted by insurance documentation workflows",
    ],
  },
  {
    icon: "/chatting-01.svg",
    iconBg: "bg-[#E100FF1A]",
    title: "The only AI truly built for India",
    description:
      "Built with Indian compliance in mind across data privacy and clinical practices. Medecro is the first AI dental analyser designed and proven for the Indian clinical context.",
    bullets: [
      "DPDP-compliant, HIPAA-aligned data security",
      "Works on low-bandwidth connections (2MB X-rays)",
      "Runs on Indian cloud endpoints — data stays in India",
      "Real-time AI streaming & support based in India",
    ],
  },
];

export default function AIXRayFeatures() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0316FF] mb-3">
            WHY MEDECRO
          </p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-2xl sm:text-3xl lg:text-[46px] font-bold leading-tight mb-3 sm:mb-4">
            Built for the way Indian<br className="hidden sm:block" /> clinics work
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] font-normal text-[14px] sm:text-[16.8px] leading-[24px] sm:leading-[27.72px] text-center text-[#6C6C6C] max-w-sm sm:max-w-xl mx-auto">
            Built for the way Indian clinics actually work — across WhatsApp,
            SMS, and automated follow-ups.
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
                  <div className="lg:hidden relative w-full aspect-[4/3] rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-md overflow-hidden flex items-center justify-center mb-4 sm:mb-5">
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
