"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, X, MessageSquare, Calendar, Brain, BarChart3 } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/specialities", label: "Specialities" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
];

const platformItems = [
  { href: "/platform/ai-communication", label: "AI Communication", icon: MessageSquare, description: "Automate patient outreach & follow-ups" },
  { href: "/platform/clinic-os", label: "Clinic OS", icon: Calendar, description: "Clinical OS" },
  { href: "/platform/ai-x-ray-analyser", label: "AI X-Ray Analyser", icon: Brain, description: "AI X-Ray Analyser support" },
  { href: "/platform/analytics", label: "Analytics & Reporting", icon: BarChart3, description: "Track outcomes and performance metrics" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Platform");
  const [drawerPlatformOpen, setDrawerPlatformOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const HamburgerIcon = () => (
    <button
      onClick={() => setDrawerOpen(true)}
      aria-label="Open menu"
      className="w-9 h-9 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center text-[#0F172A] hover:border-[#94A3B8] transition-colors"
    >
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
        <rect width="16" height="1.5" rx="0.75" fill="currentColor" />
        <rect y="5.25" width="16" height="1.5" rx="0.75" fill="currentColor" />
        <rect y="10.5" width="16" height="1.5" rx="0.75" fill="currentColor" />
      </svg>
    </button>
  );

  return (
    <>
      {/* ── Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E2E8F0]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/medecro-logo.svg" alt="Medecro" width={32} height={32} className="w-8 h-8" />
            <span className="font-semibold text-[17px] text-[#0F172A]">medecro.ai</span>
          </Link>

          {/* Desktop (lg+): nav links */}
          <ul className="hidden lg:flex items-center gap-8">

            {/* Platform dropdown */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-medium text-[#0F172A]",
                    "hover:text-[#2563EB] transition-colors outline-none",
                    "data-[state=open]:text-[#2563EB]"
                  )}
                >
                  Platform
                  <ChevronDown
                    size={14}
                    className="text-[#94A3B8] transition-transform duration-200 data-[state=open]:rotate-180"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={12}
                  className="w-72 p-2 rounded-2xl border border-[#E2E8F0] shadow-xl bg-white"
                >
                  {platformItems.map(({ href, label, icon: Icon, description }) => (
                    <DropdownMenuItem
                      key={href}
                      render={<Link href={href} />}
                      className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-[#F8FAFC] focus:bg-[#F8FAFC] transition-colors group cursor-pointer w-full"
                    >
                      <span className="mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-br from-[#EFF6FF] to-[#ECFDF5] flex items-center justify-center shrink-0 group-hover:from-[#DBEAFE] group-hover:to-[#D1FAE5] transition-colors">
                        <Icon size={15} className="text-[#2563EB]" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{label}</span>
                        <span className="block text-xs text-[#64748B] mt-0.5">{description}</span>
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            {/* Other nav links */}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#0F172A] hover:text-[#2563EB] transition-colors"
                >
                  {link.label}
                  <ChevronDown size={14} className="text-[#94A3B8]" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop (lg+): CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-[#10B981] border border-[#10B981] rounded-full px-5 py-2 hover:bg-[#10B981]/10 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book Demo
              <Image src="/demo-arrow.svg" alt="" width={14} height={14} />
            </Link>
          </div>

          {/* Tablet (md to lg): Login + Book Demo + hamburger */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-[#10B981] border border-[#10B981] rounded-full px-4 py-1.5 hover:bg-[#10B981]/10 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book Demo
              <Image src="/demo-arrow.svg" alt="" width={12} height={12} />
            </Link>
            <HamburgerIcon />
          </div>

          {/* Mobile (< md): hamburger only */}
          <div className="flex md:hidden">
            <HamburgerIcon />
          </div>
        </nav>
      </header>

      {/* ── Drawer backdrop ── */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* ── Drawer panel ── */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-xs bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
          <Link href="/" className="flex items-center gap-2" onClick={() => setDrawerOpen(false)}>
            <Image src="/medecro-logo.svg" alt="Medecro" width={28} height={28} />
            <span className="font-semibold text-[16px] text-[#0F172A]">medecro.ai</span>
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#0F172A] transition-colors"
            aria-label="Close menu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">

            {/* Platform with expandable sub-items */}
            <li>
              <button
                onClick={() => setDrawerPlatformOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all ${
                  activeLink === "Platform"
                    ? "bg-gradient-to-r from-[#EFF6FF] to-[#ECFDF5] text-[#2563EB]"
                    : "text-[#0F172A] hover:bg-[#F8FAFC]"
                }`}
              >
                Platform
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${drawerPlatformOpen ? "rotate-180 text-[#2563EB]" : activeLink === "Platform" ? "text-[#2563EB]" : "text-[#94A3B8]"}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  drawerPlatformOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="mt-1 ml-3 flex flex-col gap-0.5">
                  {platformItems.map(({ href, label, icon: Icon, description }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => { setActiveLink("Platform"); setDrawerOpen(false); }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] text-[#334155] hover:bg-[#F8FAFC] hover:text-[#2563EB] transition-colors group"
                      >
                        <span className="w-7 h-7 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0 group-hover:bg-[#DBEAFE] transition-colors">
                          <Icon size={13} className="text-[#64748B] group-hover:text-[#2563EB] transition-colors" />
                        </span>
                        <span>
                          <span className="block font-medium">{label}</span>
                          <span className="block text-xs text-[#94A3B8]">{description}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Other links */}
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => { setActiveLink(link.label); setDrawerOpen(false); }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#EFF6FF] to-[#ECFDF5] text-[#2563EB]"
                        : "text-[#0F172A] hover:bg-[#F8FAFC]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={16} className={isActive ? "text-[#2563EB]" : "text-[#94A3B8]"} />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Decorative gradient blob */}
          <div className="mt-8 mx-4 h-16 rounded-2xl bg-gradient-to-r from-[#2563EB]/10 to-[#10B981]/10 blur-xl" />
        </nav>

        {/* Drawer footer CTAs */}
        <div className="px-5 py-5 border-t border-[#F1F5F9] flex flex-col gap-3">
          <Link
            href="/login"
            onClick={() => setDrawerOpen(false)}
            className="w-full text-center py-3 rounded-full border border-[#10B981] text-[#10B981] text-sm font-semibold hover:bg-[#10B981]/10 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book Demo
            <Image src="/demo-arrow.svg" alt="" width={14} height={14} />
          </Link>
        </div>
      </div>
    </>
  );
}
