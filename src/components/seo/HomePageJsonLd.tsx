import { Helmet } from "react-helmet-async";
import { marketingFaqs } from "@/data/faqContent";
import { TRYLOOK_MAIN_URL, defaultOgImage, getCanonicalUrl } from "@/data/seoIntegrationPages";
import { SITE_DEFAULT_DESCRIPTION } from "@/lib/siteSeo";

const BRAND_PRIMARY = "TryLook-ai";
const BRAND_ALTERNATE = "Try Look";

/**
 * Organization, WebSite, SoftwareApplication, and FAQPage JSON-LD for the marketing homepage (SEO + GEO).
 */
export function HomePageJsonLd() {
  const siteUrl = getCanonicalUrl("/");
  const orgId = `${siteUrl}#organization`;
  const websiteId = `${siteUrl}#website`;
  const softwareId = `${siteUrl}#software`;

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteUrl}#faq`,
    url: siteUrl,
    isPartOf: { "@id": websiteId },
    inLanguage: "en",
    mainEntity: marketingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: BRAND_PRIMARY,
        alternateName: [BRAND_ALTERNATE, "TryLook AI"],
        url: TRYLOOK_MAIN_URL,
        logo: {
          "@type": "ImageObject",
          url: defaultOgImage,
        },
        description: SITE_DEFAULT_DESCRIPTION,
        sameAs: ["https://twitter.com/TryLookAI"],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: BRAND_PRIMARY,
        alternateName: BRAND_ALTERNATE,
        url: siteUrl,
        description: SITE_DEFAULT_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": orgId },
        about: { "@id": softwareId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: BRAND_PRIMARY,
        alternateName: BRAND_ALTERNATE,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Virtual try-on widget for e-commerce",
        operatingSystem: "Web",
        browserRequirements: "Requires JavaScript. Works in modern browsers.",
        description: SITE_DEFAULT_DESCRIPTION,
        url: TRYLOOK_MAIN_URL,
        image: defaultOgImage,
        offers: {
          "@type": "Offer",
          url: TRYLOOK_MAIN_URL,
          availability: "https://schema.org/InStock",
          description: "Free tier available; usage-based pricing for scale.",
        },
        provider: { "@id": orgId },
      },
      faqPage,
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}
