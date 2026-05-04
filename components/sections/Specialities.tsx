const items = [
  {
    num: "01",
    title: "Specialty-native flows, built with clinicians",
    desc: "Every screen, every field, every interaction — designed with dentists for dentists, psychiatrists for psychiatrists. No compromises, no one-size fits all.",
  },
  {
    num: "02",
    title: "Only what that speciality actually needs",
    desc: "No irrelevant fields. No generic dropdowns. Only the clinical logic that matters for each doctor type — keeping consultations fast and accurate.",
  },
  {
    num: "03",
    title: "Software adapts to how doctors think",
    desc: "Rx pads are configurable per doctor. Clinical flows mirror real-world consultation patterns. The software learns your style, not the other way around.",
  },
  {
    num: "04",
    title: "AI-native from the ground up",
    desc: "Not AI added on top. AI woven into every clinical decision point — from X-ray to prescription to follow-up. Intelligence built in, not bolted on.",
  },
];

export default function Specialities() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="font-[family-name:var(--font-outfit)] font-bold text-[#0316FF] uppercase mb-4 block text-[11px] leading-[17.6px] tracking-[1.65px]">
            Our Moat
          </span>
          <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#1E1E1E] text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[-1px]">
            Every speciality is different.
          </h2>
          <h2 className="font-[family-name:var(--font-fraunces)] font-normal italic mb-5 text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[-1px] text-[#0316FF]">
            We built for that.
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed max-w-sm mx-auto">
            Most clinical platforms force every doctor through the same generic
            interface. We took a different path — built from the ground up with
            clinicians.
          </p>
        </div>

        {/* Single card with 2×2 grid */}
        <div className="bg-white rounded-2xl shadow-md border border-[#E2E8F0] overflow-hidden">
          <div className="grid sm:grid-cols-2">
            {items.map((item, i) => (
              <div
                key={item.num}
                className={`p-6 sm:p-8 border-[#E2E8F0] ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${
                  i < 2 ? "border-b" : ""
                }`}
              >
                <span className="font-[family-name:var(--font-fraunces)] font-bold text-[#E2E8F0] block mb-4 select-none text-[48px] sm:text-[56px] leading-none">
                  {item.num}
                </span>
                <h3 className="font-bold text-[#0F172A] text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
