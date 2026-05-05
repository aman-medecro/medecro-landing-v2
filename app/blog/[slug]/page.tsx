import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getBlogPost, getAllSlugs } from "@/lib/blog-data";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import { siteConfig } from "@/lib/metadata";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      publishedTime: post.date,
      tags: [post.category],
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogPostingSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${post.categoryColor}`}
            >
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748B] pb-8 border-b border-[#E2E8F0]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.dateDisplay}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span>By {post.author.name}</span>
            </div>
          </header>

          {/* Article body */}
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer */}
          <div className="mt-14 pt-8 border-t border-[#E2E8F0] flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:underline"
            >
              <ArrowLeft size={16} />
              All articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1d4ed8] px-4 py-2 rounded-lg transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
