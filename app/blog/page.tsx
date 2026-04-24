import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Blog – Clinical Intelligence Insights",
  description:
    "Articles, guides, and resources for Indian doctors on AI in healthcare, clinic management, and regulatory compliance.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

const posts = [
  {
    title: "How AI Diagnostics is Reducing Misdiagnosis Rates in Indian Clinics",
    category: "AI & Healthcare",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "5 min read",
    slug: "ai-diagnostics-india",
    excerpt:
      "Exploring how machine learning trained on Indian patient data is catching what traditional methods miss in busy OPD settings.",
    date: "April 18, 2026",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    title: "The Hidden Cost of Paper-Based Records: What Indian Clinics Lose Every Month",
    category: "Practice Management",
    categoryColor: "bg-green-100 text-green-700",
    readTime: "4 min read",
    slug: "paper-records-cost-india",
    excerpt:
      "A data-driven breakdown of time, revenue, and compliance risks that paper medical records introduce — and how to eliminate them.",
    date: "April 10, 2026",
    gradient: "from-green-400 to-teal-600",
  },
  {
    title: "DPDP Act 2023: What Every Indian Doctor Needs to Know About Patient Data",
    category: "Compliance",
    categoryColor: "bg-amber-100 text-amber-700",
    readTime: "6 min read",
    slug: "dpdp-act-doctors-guide",
    excerpt:
      "A plain-English guide to India's Digital Personal Data Protection Act and what obligations it creates for clinic owners.",
    date: "April 3, 2026",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    title: "Building Speciality-Native Workflows: Lessons from 2,000 Indian Clinics",
    category: "Product",
    categoryColor: "bg-purple-100 text-purple-700",
    readTime: "7 min read",
    slug: "specialty-workflows-india",
    excerpt:
      "What we learned from deploying Medecro across 12+ specialities and why generic clinic software fails doctors.",
    date: "March 28, 2026",
    gradient: "from-purple-400 to-violet-600",
  },
  {
    title: "The Future of Telemedicine in India: Regulatory & Technical Outlook for 2026",
    category: "Industry",
    categoryColor: "bg-cyan-100 text-cyan-700",
    readTime: "8 min read",
    slug: "telemedicine-india-2026",
    excerpt:
      "An analysis of India's evolving telemedicine landscape and what clinics should prepare for in the coming year.",
    date: "March 20, 2026",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    title: "AI Billing: How Medecro's Billing AI Increased Revenue for 500 Clinics",
    category: "Case Study",
    categoryColor: "bg-rose-100 text-rose-700",
    readTime: "5 min read",
    slug: "billing-ai-case-study",
    excerpt:
      "Real numbers from clinics that switched to AI-powered billing and coding — the revenue impact is larger than most expect.",
    date: "March 12, 2026",
    gradient: "from-rose-400 to-pink-600",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-4">
            Medecro Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
            Clinical intelligence insights
          </h1>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Articles, guides, and resources for Indian doctors navigating AI
            healthcare, clinic management, and regulatory compliance.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div
                className={`h-48 bg-gradient-to-br ${post.gradient} flex items-end p-4`}
              >
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.categoryColor} bg-white/90`}
                >
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-[#64748B] mb-3">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span className="text-xs">{post.readTime}</span>
                  </div>
                  <span className="text-xs">·</span>
                  <span className="text-xs">{post.date}</span>
                </div>

                <h2 className="font-bold text-[#0F172A] text-sm leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                  {post.title}
                </h2>

                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:underline"
                >
                  Read article <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
