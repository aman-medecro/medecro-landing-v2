"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const specialities = [
  "General Practice",
  "Cardiology",
  "Dermatology",
  "Dental",
  "Orthopaedics",
  "Gynaecology",
  "Ophthalmology",
  "Paediatrics",
  "Psychiatry",
  "ENT",
];

const bullets = [
  "Native flow built with you and your team",
  "Priority onboarding & dedicated support",
  "Founding pricing locked in forever",
  "Early access to every module as it launches",
];

const trust = ["No credit card required", "Cancel anytime", "HIPAA-ready"];

export default function SpecialityFlow() {
  const [form, setForm] = useState({ name: "", clinic: "", email: "", speciality: "" });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.speciality) setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="block font-bold uppercase text-[#0316FF] mb-4 text-[11px] leading-[17.6px] tracking-[1.65px]">
              Early Access
            </span>
            <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] text-[30px] sm:text-[36px] lg:text-[42px] leading-tight tracking-[-1px] mb-5">
              Get your speciality&apos;s
              <br />
              native flow{" "}
              <span className="text-[#0316FF] italic">first.</span>
            </h2>
            <p className="text-[#64748B] text-sm sm:text-[15px] leading-[1.7] mb-8 max-w-sm mx-auto lg:mx-0">
              Founding Partners shape the product. Tell us your speciality and we&apos;ll build
              your flow with you — before anyone else gets access.
            </p>

            <ul className="space-y-3 mb-8 sm:mb-10">
              {bullets.map((item) => (
                <li key={item} className="flex items-center justify-center lg:justify-start gap-2.5 text-sm font-medium text-[#1E1E1E]">
                  {/* <span className="text-[#2563EB] font-bold text-base leading-none">✓</span> */}
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-1">
              {trust.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[#64748B] text-xs">
                  <span className="text-[#16A34A] font-bold">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div>
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-sm p-8">
              {!submitted ? (
                <>
                  <h3 className="font-bold text-[#0F172A] text-lg mb-1">
                    Request Early Access
                  </h3>
                  <p className="text-[#64748B] text-sm mb-6">
                    Join 2,000+ clinics already on the platform
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#0F172A] mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Dr. Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#0F172A] mb-1.5">
                        Clinic Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Clinic Name"
                        value={form.clinic}
                        onChange={(e) => setForm({ ...form, clinic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#0F172A] mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@clinic.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                      />
                    </div>

                    {/* Custom dropdown */}
                    <div>
                      <label className="block text-xs font-medium text-[#0F172A] mb-1.5">
                        I Practice
                      </label>
                      <div ref={dropdownRef} className="relative">
                        {/* Backdrop */}
                        {dropdownOpen && (
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setDropdownOpen(false)}
                          />
                        )}

                        {/* Trigger */}
                        <button
                          type="button"
                          onClick={() => setDropdownOpen((o) => !o)}
                          className="relative z-20 w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                        >
                          <span className={form.speciality ? "text-[#0F172A]" : "text-[#94A3B8]"}>
                            {form.speciality || "Select your speciality"}
                          </span>
                          <Image
                            src="/Vector-2.svg"
                            alt="dropdown"
                            width={12}
                            height={12}
                            className={`shrink-0 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {/* Dropdown list */}
                        {dropdownOpen && (
                          <ul className="absolute z-20 top-full left-0 w-full mt-1 bg-white border border-[#E2E8F0] rounded-lg shadow-lg overflow-y-auto max-h-52">
                            {specialities.map((s) => (
                              <li
                                key={s}
                                onClick={() => {
                                  setForm({ ...form, speciality: s });
                                  setDropdownOpen(false);
                                }}
                                className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-[#F1F5F9] ${
                                  form.speciality === s
                                    ? "text-[#2563EB] font-semibold bg-[#EFF6FF]"
                                    : "text-[#0F172A]"
                                }`}
                              >
                                {s}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#0316FF] text-white font-semibold text-sm hover:opacity-90 transition-opacity mt-2"
                    >
                      Request Early Access →
                    </button>
                  </form>

                  <p className="text-center text-xs text-[#64748B] mt-4">
                    Or{" "}
                    <Link href="#demo" className="text-[#0316FF] font-semibold hover:underline">
                      Book a live demo →
                    </Link>
                  </p>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl font-bold">✓</span>
                  </div>
                  <h4 className="font-bold text-[#0F172A] mb-2">You&apos;re on the list!</h4>
                  <p className="text-sm text-[#64748B]">
                    We&apos;ll reach out within 24 hours to set up your{" "}
                    <strong className="text-[#2563EB]">{form.speciality}</strong> flow.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
