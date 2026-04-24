"use client";

const logos = [
  { name: "Apollo Hospitals", initials: "AH" },
  { name: "Fortis Healthcare", initials: "FH" },
  { name: "Max Healthcare", initials: "MH" },
  { name: "AIIMS", initials: "AI" },
  { name: "Narayana Health", initials: "NH" },
  { name: "Manipal Hospitals", initials: "MN" },
  { name: "Columbia Asia", initials: "CA" },
  { name: "Kokilaben Hospital", initials: "KH" },
  { name: "Ruby Hall Clinic", initials: "RH" },
  { name: "Lilavati Hospital", initials: "LH" },
];

function LogoItem({ name, initials }: { name: string; initials: string }) {
  return (
    <div className="flex items-center gap-3 mx-8 flex-shrink-0">
      <div className="w-10 h-10 rounded-xl bg-gray-100 border border-[#E2E8F0] flex items-center justify-center">
        <span className="text-sm font-bold text-[#64748B]">{initials}</span>
      </div>
      <span className="text-sm font-semibold text-[#64748B] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function LogoBar() {
  return (
    <section className="py-12 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-sm text-[#64748B] font-medium uppercase tracking-widest">
          Trusted by leading clinics & hospitals across India
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
