import { siteConfig } from "./metadata";
import type { BlogPost } from "./blog-data";

export function getMedicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Medecro",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: siteConfig.url,
    description: siteConfig.description,
    featureList: [
      "AI Dental X-Ray Analysis",
      "EMR and Clinical Notes",
      "OPD Appointment Scheduling",
      "AI Patient Communication",
      "Medical Billing and Invoicing",
      "SNOMED CT Mapping",
      "DPDP Act Compliance",
    ],
    applicationSubCategory: "MedicalApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    publisher: {
      "@type": "Organization",
      name: "Medecro",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/medecro-logo.svg`,
      },
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Medecro",
    url: siteConfig.url,
    logo: `${siteConfig.url}/medecro-logo.svg`,
    description: siteConfig.description,
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@medecro.ai",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://twitter.com/medecroai",
      "https://linkedin.com/company/medecro",
    ],
    knowsAbout: [
      "Clinic Management Software",
      "AI Healthcare India",
      "Electronic Medical Records",
      "Medical Billing Software",
      "AI Diagnostics",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Medecro",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/medecro-logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.wordCount,
    inLanguage: "en-IN",
    image: `${siteConfig.url}/opengraph-image`,
    url: `${siteConfig.url}/blog/${post.slug}`,
  };
}

export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
