import { Helmet } from "react-helmet-async";
import { TRYLOOK_MAIN_URL, defaultOgImage, getCanonicalUrl } from "@/data/seoIntegrationPages";
import { SITE_DEFAULT_DESCRIPTION } from "@/lib/siteSeo";

/**
 * WebSite + Organization JSON-LD for the marketing homepage.
 */
export function HomePageJsonLd() {
  const siteUrl = getCanonicalUrl("/");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Try Look",
        url: TRYLOOK_MAIN_URL,
        logo: defaultOgImage,
        sameAs: ["https://twitter.com/TryLookAI"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Try Look",
        url: siteUrl,
        description: SITE_DEFAULT_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: "Try Look",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          url: TRYLOOK_MAIN_URL,
        },
        provider: { "@id": `${siteUrl}#organization` },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}
