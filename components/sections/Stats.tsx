const stats = [
  {
    value: "90%",
    color: "text-[#0316FF]",
    label: "Faster AI Diagnostics",
    sublabel: "Average speed improvement in AI-assisted diagnosis",
  },
  {
    value: "2K+",
    color: "text-[#16A34A]",
    label: "Clinics Live",
    sublabel: "Active clinics across 9 major cities in India",
  },
  {
    value: "92%",
    color: "text-[#0316FF]",
    label: "Adherence Improvement",
    sublabel: "Improvement in patient appointment adherence rate",
  },
  {
    value: "12+",
    color: "text-[#16A34A]",
    label: "Specialities",
    sublabel: "Medical specialities being built natively on the platform",
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="font-[family-name:var(--font-outfit)] font-bold text-[11px] leading-[17.6px] tracking-[1.65px] uppercase text-[#0316FF] mb-4 text-center">
          Platform Impact
        </p>

        {/* Heading */}
        <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[-1px] mb-8 sm:mb-10 text-center">
          Numbers that speak for themselves.
        </h2>

        {/* Stats card */}
        <div className="bg-[#F5F7FA] rounded-2xl shadow-md border border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-[#E2E8F0]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-start sm:items-center text-left sm:text-center px-5 sm:px-8 py-7 sm:py-10 border-[#E2E8F0]
                ${i % 2 === 0 ? "border-r sm:border-r-0" : ""}
                ${i < 2 ? "border-b sm:border-b-0" : ""}
              `}
            >
              <span className={`font-[family-name:var(--font-fraunces)] font-bold text-[36px] sm:text-[48px] leading-none ${stat.color}`}>
                {stat.value}
              </span>
              <span className="font-bold text-sm text-[#0F172A] mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-[#64748B] mt-1 max-w-[140px]">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
