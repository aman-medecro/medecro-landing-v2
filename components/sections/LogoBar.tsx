"use client";

const items = [
  { text: "clinics live across India", highlight: "2,000+" },
  { text: "faster diagnostics", highlight: "AI X-ray: 90%" },
  { text: "live now · GPIM & Psychiatry coming soon", highlight: "Dental module" },
  { text: "medicines in Rx intelligence", highlight: "6.5L+" },
  { text: "Patient adherence up", highlight: "92% on average" },
  { text: "Complete prescription in", highlight: "under 10 seconds" },
  { text: "HIPAA-ready · SOC2 compliant", highlight: "" },
];

function TickerItem({ text, highlight }: { text: string; highlight: string }) {
  return (
    <div className="flex items-center gap-8 flex-shrink-0">
      <span className="text-sm text-[#374151] whitespace-nowrap">
        {highlight && (
          <strong className="font-semibold text-[#0F172A]">{highlight} </strong>
        )}
        {text}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
    </div>
  );
}

export default function LogoBar() {
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-[#E2E8F0] bg-white py-3 overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-2">
          {doubled.map((item, i) => (
            <TickerItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
