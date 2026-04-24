"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How AI Diagnostics is Reducing Misdiagnosis Rates in Indian Clinics",
    category: "AI & Healthcare",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "5 min read",
    slug: "ai-diagnostics-india",
    excerpt:
      "Exploring how machine learning trained on Indian patient data is catching what traditional methods miss in busy OPD settings.",
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
    gradient: "from-amber-400 to-orange-600",
  },
];

export default function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-3">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Read something new today.
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:underline"
          >
            All articles <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Thumbnail */}
              <div
                className={`h-44 bg-gradient-to-br ${post.gradient} flex items-end p-4`}
              >
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.categoryColor} bg-white/90`}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[#64748B] mb-3">
                  <Clock size={12} />
                  <span className="text-xs">{post.readTime}</span>
                </div>

                <h3 className="font-bold text-[#0F172A] text-sm leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                  {post.title}
                </h3>

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
            </motion.article>
          ))}
        </div>

        {/* Mobile all articles link */}
        <div className="sm:hidden text-center mt-6">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#2563EB] hover:underline"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
