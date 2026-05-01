const dotColors = ["#0316FF", "#F97316", "#18A600"];

const items = [
  { pre: "", bold: "2,000+", post: " clinics live across India" },
  { pre: "AI X-ray: ", bold: "90% faster", post: " diagnostics" },
  { pre: "Dental module ", bold: "live now", post: " · GPIM & Psychiatry coming soon" },
  { pre: "", bold: "6.5L+", post: " medicines in Rx Intelligence" },
  { pre: "Patient adherence up ", bold: "92%", post: " on average" },
  { pre: "Complete prescription in ", bold: "under 10 seconds", post: "" },
  { pre: "", bold: "HIPAA-ready", post: " · SOC2 compliant" },
];

function StripItem({ pre, bold, post, dotColor }: { pre: string; bold: string; post: string; dotColor: string }) {
  return (
    <div className="flex items-center gap-8 flex-shrink-0">
      <div className="flex items-center">
        <span className="text-sm text-[#374151] whitespace-nowrap">
          {pre}
          <strong className="font-semibold text-[#0F172A]">{bold}</strong>
          {post}
        </span>
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: dotColor, marginLeft: '14px', marginRight: '14px' }} />
      </div>
    </div>
  );
}   

export default function LogoBar() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="border-y border-[#FFFFFF14] bg-[linear-gradient(90deg,rgba(3,22,255,0.08)_0%,rgba(3,22,255,0)_50%,rgba(24,166,0,0.08)_100%)] py-3.5 overflow-hidden">
      <div className="flex animate-marquee w-max items-center">
        {repeated.map((item, i) => (
          <StripItem
            key={i}
            {...item}
            dotColor={dotColors[i % dotColors.length]}
          />
        ))}
      </div>
    </section>
  );
}
