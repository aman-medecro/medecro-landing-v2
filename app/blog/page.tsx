import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { siteConfig } from "@/lib/metadata";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog – Clinical Intelligence Insights",
  description:
    "Articles, guides, and resources for Indian doctors on AI in healthcare, clinic management, and regulatory compliance.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

const posts = blogPosts;

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
                  <span className="text-xs">{post.dateDisplay}</span>
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
