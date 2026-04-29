import Image from "next/image";

const features = [
  {
    badge: "👤 PATIENT MANAGEMENT",
    badgeColor: "text-[#1A5FD4]",
    badgeBg: "bg-[#1A5FD414]",
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
    badge: "📅 APPOINTMENT SCHEDULING",
    badgeColor: "text-[#1A5FD4]",
    badgeBg: "bg-[#1A5FD414]",
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
    badge: "🔔 FOLLOW-UP MANAGEMENT",
    badgeColor: "text-[#1A5FD4]",
    badgeBg: "bg-[#1A5FD414]",
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
    badge: "💳 BILLING & INVOIVCING",
    badgeColor: "text-[#1A5FD4]",
    badgeBg: "bg-[#1A5FD414]",
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
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0316FF] mb-3">
            WHY MEDECRO 
          </p>
          <h2 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-2xl sm:text-3xl lg:text-[46px] font-bold leading-tight mb-4">
            Built for the way Indian<br className="hidden sm:block" /> clinics work
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] font-normal text-[15px] sm:text-[16.8px] leading-[26px] sm:leading-[27.72px] text-center text-[#6C6C6C] max-w-xl mx-auto">
            Built for the way Indian clinics actually work — across WhatsApp,
            SMS, and automated follow-ups.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {features.map(({ badge, badgeColor, badgeBg, title, description, bullets }, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Text side */}
                <div className="flex flex-col">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${badgeBg} mb-4 w-fit`}>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${badgeColor}`}>
                      {badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[#0F172A] text-xl sm:text-2xl lg:text-[28px] font-bold leading-snug mb-3">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-5">
                    {description}
                  </p>

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

                {/* Image placeholder */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-md overflow-hidden flex items-center justify-center">
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
