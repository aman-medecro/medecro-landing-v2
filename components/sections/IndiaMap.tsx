import Image from "next/image";
import Link from "next/link";

export default function IndiaMap() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Text */}
        <div className="text-center lg:text-left">
          <p className="font-[family-name:var(--font-outfit)] font-bold text-[11px] leading-[17.6px] tracking-[1.65px] uppercase text-[#0316FF] mb-4">
            Clinics Across India
          </p>

          <h2 className="font-[family-name:var(--font-fraunces)] text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[-1px] mb-5">
            <span className="font-bold text-[#0F172A]">
              From Mumbai to
              <br />
              Chennai.
            </span>
            <span className="font-normal italic text-[#0316FF]">
              {" "}Medecro is everywhere.
            </span>
          </h2>

          <p className="font-[family-name:var(--font-outfit)] text-[#6C6C6C] text-base sm:text-[18px] leading-relaxed sm:leading-[27.2px] mb-8 max-w-lg mx-auto lg:mx-0">
            2,000+ clinics across India trust Medecro with their clinical
            intelligence — in metro hospitals, standalone practices, and
            everything in between.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#0316FF] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Join 2,000+ Clinics →
            </Link>
          </div>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
          <Image
            src="/india-1.svg"
            alt="India map"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
