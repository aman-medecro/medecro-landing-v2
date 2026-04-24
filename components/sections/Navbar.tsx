"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/platform", label: "Platform", hasDropdown: true },
  { href: "/specialities", label: "Specialities", hasDropdown: true },
  { href: "/resources", label: "Resources", hasDropdown: true },
  { href: "/company", label: "Company", hasDropdown: true },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-sm border-b border-[#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src={"/medecro-logo.svg"}
              alt="Medecro logo"
              width={20}
              height={20}
              className="w-12 h-12"
            
            />
          </div>
          <span className="font-semibold text-xl text-[#0F172A]">medecro.ai</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 text-sm text-[#000000] hover:text-[#000000] transition-colors font-medium"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} className="text-[#64748B]" />}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm text-[#10B981] font-medium border border-[#10B981] rounded-full px-5 py-2 hover:bg-[#10B981]/10 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Book Demo <span>
              <Image
                src={"/demo-arrow.svg"}
                alt="demo-arrow"
                width={10}
                height={10}
                className="w-4 h-4"
              />
            </span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-[#64748B] hover:text-[#0F172A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 pb-4">
          <ul className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm text-[#64748B] hover:text-[#0F172A] font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contact"
                className="block w-full text-center px-4 py-2 rounded-lg bg-[#2563EB] text-white text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
