import Link from "next/link";
import Image from "next/image";

const links = {
  PLATFORM: [
    { label: "AI Diagnostics", href: "#" },
    { label: "Clinic OS", href: "#" },
    { label: "Rx Intelligence", href: "#" },
    { label: "AI Communication", href: "#" },
    { label: "Billing", href: "#" },
  ],
  SPECIALITIES: [
    { label: "Dentistry", href: "#" },
    { label: "GPIM", href: "#" },
    { label: "Psychiatry", href: "#" },
    { label: "Dermatology", href: "#" },
    { label: "All Specialities →", href: "#" },
  ],
  COMPANY: [
    { label: "About", href: "#" },
    { label: "Approach", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  RESOURCES: [
    { label: "Blog", href: "#" },
    { label: "Help Centre", href: "#" },
    { label: "API Docs", href: "#" },
  ],
};

const AppBadges = () => (
  <div className="flex flex-col sm:flex-row gap-2">
    <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:opacity-90 transition-opacity border border-[#333]">
      <Image src="/apple.svg" alt="App Store" width={22} height={22} />
      <div>
        <div className="text-[9px] text-[#999] leading-none mb-0.5">Download on the</div>
        <div className="text-[13px] font-semibold text-white leading-none">App Store</div>
      </div>
    </a>
    <a href="#" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:opacity-90 transition-opacity border border-[#333]">
      <Image src="/google-play.svg" alt="Google Play" width={22} height={22} />
      <div>
        <div className="text-[9px] text-[#999] leading-none mb-0.5">GET IT ON</div>
        <div className="text-[13px] font-semibold text-white leading-none">Google Play</div>
      </div>
    </a>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#F5F7FA] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">

        {/* Top grid:
            mobile  → 2-col: brand full-width, link cols 2×2
            sm–lg   → 4-col: brand full-width, 4 link cols in one row
            lg+     → 6-col: brand col-span-2, 4 link cols             */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10 mb-10 sm:mb-12">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            {/* On mobile: stacked. On sm–lg: brand info left, badges right. On lg+: stacked again */}
            <div className="flex flex-col sm:flex-row sm:justify-between lg:flex-col gap-5">

              {/* Logo + tagline + social */}
              <div>
                {/* Two-column row: [logo+tagline+social] left, [badges] right (mobile only) */}
                <div className="flex items-start justify-between gap-4">
                  {/* Left: logo, tagline, social stacked */}
                  <div>
                    <Link href="/" className="flex items-center gap-2 mb-3">
                      <Image src="/medecro-logo.svg" alt="Medecro" width={28} height={28} />
                      <span className="font-semibold text-[#0F172A] text-[15px]">medecro.ai</span>
                    </Link>
                    <p className="text-[#64748B] text-[13px] leading-[1.65] mb-4 max-w-[180px] sm:max-w-[200px] lg:max-w-none">
                      Clinical Intelligence, Reimagined · Specialty-native · AI-native. The AI intelligence layer for every clinical workflow.
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://linkedin.com/company/medecro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#0F172A] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Image src="/linkedin-01.svg" alt="LinkedIn" width={22} height={22} />
                      </a>
                      <a
                        href="https://facebook.com/medecroai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#0F172A] transition-colors"
                        aria-label="Facebook"
                      >
                        <Image src="/facebook-02.svg" alt="Facebook" width={22} height={22} />
                      </a>
                    </div>
                  </div>

                  {/* Right: badges — mobile only */}
                  <div className="sm:hidden shrink-0">
                    <AppBadges />
                  </div>
                </div>
              </div>

              {/* App badges — tablet+ only (hidden on mobile, shown sm+) */}
              <div className="hidden sm:block shrink-0">
                <AppBadges />
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-[11px] font-bold text-[#0F172A] uppercase tracking-[1.5px] mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-[#64748B] hover:text-[#0F172A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar — mobile: legal on top, copyright below; sm+: copyright left, legal right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#E2E8F0]">
          <p className="text-[12px] text-[#94A3B8] order-2 sm:order-1">
            © 2026 Medecro.ai · All rights reserved · AI clinical intelligence platform
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 order-1 sm:order-2">
            {["Privacy Policy", "Terms of Service", "DPDP Compliance"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-[12px] text-[#94A3B8] hover:text-[#64748B] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
