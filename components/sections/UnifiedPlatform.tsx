"use client";

import { useState } from "react";
import {
  CalendarDays,
  CreditCard,
  FileText,
  Pill,
  FlaskConical,
  Users,
  Video,
  ScanLine,
} from "lucide-react";

const features = [
  {
    id: "clinical-records",
    tab: "Smart Clinical Records",
    icon: FileText,
    title: "Smart Clinical Records",
    description:
      "AI-assisted EMR that auto-fills from voice, suggests diagnoses, and keeps patient history organised for every visit.",
  },
  {
    id: "opd-management",
    tab: "OPD Management",
    icon: CalendarDays,
    title: "OPD Management",
    description:
      "Real-time OPD scheduling with procedure-based slot durations, multi-chair views, and predictive no-show alerts.",
  },
  {
    id: "ai-prescriptions",
    tab: "AI Prescriptions",
    icon: Pill,
    title: "AI Prescriptions",
    description:
      "Generate complete prescriptions in under 10 seconds with SNOMED-mapped medicines and speciality-specific templates.",
  },
  {
    id: "automated-billing",
    tab: "Automated Billing",
    icon: CreditCard,
    title: "Automated Billing",
    description:
      "One-click billing with GST compliance, insurance claim automation, and real-time revenue dashboards.",
  },
  {
    id: "pacs-integration",
    tab: "PACS Integration",
    icon: ScanLine,
    title: "PACS Integration",
    description:
      "Connect your radiology workflow with AI-powered X-ray analysis, DICOM support, and instant report sharing.",
  },
  {
    id: "lab-connect",
    tab: "Lab Connect",
    icon: FlaskConical,
    title: "Lab Connect",
    description:
      "Order lab tests, receive digital reports, and get AI-interpreted results directly inside the patient record.",
  },
  {
    id: "patient-portal",
    tab: "Patient Portal",
    icon: Users,
    title: "Patient Portal",
    description:
      "Give patients a digital touchpoint — appointments, reports, prescriptions, and follow-ups in one app.",
  },
  {
    id: "tele-consultations",
    tab: "Tele-Consultations",
    icon: Video,
    title: "Tele-Consultations",
    description:
      "HD video consultations with in-call prescriptions, vitals capture, and automatic session documentation.",
  },
];

export default function UnifiedPlatform() {
  const [activeId, setActiveId] = useState("opd-management");

  const active = features.find((f) => f.id === activeId)!;
  const Icon = active.icon;

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-[family-name:var(--font-dm-sans)] font-bold text-[#0316FF] uppercase mb-4 block text-[11px] leading-[17.6px] tracking-[1.65px]">
            Full Platform
          </span>
          <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] mb-4 text-[32px] sm:text-[40px] lg:text-[48px] leading-tight tracking-[-1px]">
            Everything under one roof.
          </h2>
          <p className="text-[#64748B] text-base max-w-md mx-auto">
            Eight powerful features that cover every operational need of your clinic.
          </p>
        </div>

        {/* Tab list — horizontally scrollable on mobile/tablet */}
        <div className="mb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-1 pb-1 scrollbar-none">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveId(f.id)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all font-medium whitespace-nowrap shrink-0 ${
                  activeId === f.id
                    ? "border border-[#2563EB] text-[#2563EB]"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {f.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content card */}
        <div
          key={activeId}
          className="bg-[#F5F7FA] rounded-2xl px-6 sm:px-8 py-12 sm:py-16 flex flex-col items-center text-center"
        >
          <div className="w-14 h-14 rounded-2xl border-2 border-[#2563EB] flex items-center justify-center mb-6">
            <Icon size={26} className="text-[#2563EB]" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-3">{active.title}</h3>
          <p className="text-[#64748B] text-sm leading-relaxed max-w-sm">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}
