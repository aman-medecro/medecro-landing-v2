import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl font-bold text-[#E2E8F0] mb-4">404</span>
      <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Page not found</h1>
      <p className="text-[#64748B] mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1d4ed8] px-5 py-2.5 rounded-lg transition-colors"
      >
        Return to Medecro
      </Link>
    </div>
  );
}
