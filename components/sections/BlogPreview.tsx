import Link from "next/link";
import { CalendarDays } from "lucide-react";

const featured = {
  date: "Dec 21, 2025",
  title: "The Next-Gen Choice: Best Dental Clinic Management Software in India",
  excerpt: [
    "If you are looking for the \"best dental clinic management software in India\", you are in the right place. This space is moving very fast, and with AI and automation making their way into how clinics modernise their workflows, that pace is only increasing.",
    "In this article, we discuss what dental clinic management software is, the features to look for, review and compare ten systems (with a clear winner), and help you pick the best from the pack for your practice.",
    "And yes - Our choice as best in class for a modern, AI-driven platform in India is Medecro.ai, as the next-gen solution.",
  ],
  slug: "best-dental-clinic-management-software-india",
};

const latest = [
  {
    title: "Top Dental Industry Trends That Are Changing Patient Care Forever",
    date: "Dec 21, 2025",
    slug: "dental-industry-trends",
  },
  {
    title: "How Artificial Intelligence is Revolutionizing Dental Diagnostics",
    date: "Jan 15, 2026",
    slug: "ai-dental-diagnostics",
  },
  {
    title: "The Rise of Teledentistry: Bridging the Gap in Oral Health Access",
    date: "Feb 10, 2026",
    slug: "rise-of-teledentistry",
  },
  {
    title: "Advancements in Dental Implants: What Patients Need to Know",
    date: "Mar 5, 2026",
    slug: "dental-implants-advancements",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#F0F4F8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="block font-bold uppercase text-[#2563EB] mb-3 text-[11px] leading-[17.6px] tracking-[1.65px]">
            Our Blogs
          </span>
          <h2 className="font-[family-name:var(--font-fraunces)] font-bold text-[#0F172A] text-[40px] leading-[1.15] tracking-[-1px]">
            Read something new today
          </h2>
        </div>

        {/* Main card */}
        <div className="overflow-hidden">

          {/* Featured post */}
          <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
            {/* Left: text */}
            <div>
              <div className="flex items-center gap-1.5 text-[#64748B] text-xs mb-3">
                <CalendarDays size={13} className="shrink-0" />
                <span>{featured.date}</span>
              </div>
              <h3 className="font-[family-name:var(--font-fraunces)] font-semibold text-[#1E1E1E] text-[30px] leading-none tracking-[-1px] mb-4">
                {featured.title}
              </h3>
              <p className="font-[family-name:var(--font-outfit)] font-normal text-[#6C6C6C] text-[15px] leading-[156%] tracking-[1px] mb-4 line-clamp-3">
                {featured.excerpt[0]}
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="text-[#2563EB] text-sm font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>

            {/* Right: image placeholder */}
            <div className="w-full aspect-[4/3] rounded-xl bg-[#E2E8F0]" />
          </div>

  
          {/* Latest articles */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
            <h4
              className="font-[family-name:var(--font-fraunces)] text-[#000000] mb-5"
              style={{ fontWeight: 400, fontSize: 32, lineHeight: "100%", letterSpacing: "0px" }}
            >
              Latest Articles
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {latest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col gap-3"
                >
                  <div className="w-full aspect-[4/3] rounded-xl bg-[#D9DEE4] group-hover:bg-[#C8CDD3] transition-colors" />
                  <div>
                    <p className="text-[#0F172A] text-[13px] font-medium leading-snug mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-3">
                      {article.title}
                    </p>
                    <div className="flex items-center gap-1 text-[#94A3B8] text-[11px]">
                      <CalendarDays size={11} className="shrink-0" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* See more */}
        <div className="text-center mt-6">
          <Link
            href="/blog"
            className="text-[#2563EB] text-sm font-semibold hover:underline"
          >
            See More Blogs →
          </Link>
        </div>

      </div>
    </section>
  );
}
