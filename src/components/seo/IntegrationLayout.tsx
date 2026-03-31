import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import type { IntegrationPageConfig } from "@/data/seoIntegrationPages";
import {
  TRYLOOK_MAIN_URL,
  defaultOgImage,
  getCanonicalUrl,
} from "@/data/seoIntegrationPages";

export type IntegrationLayoutProps = IntegrationPageConfig;

const CTA_LABEL = "Learn more about TryLook-ai 👉";

export function IntegrationLayout({
  platformName,
  h1,
  subtitle,
  body,
  pageTitle,
  metaDescription,
  path,
}: IntegrationLayoutProps) {
  const canonical = getCanonicalUrl(path);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: metaDescription,
    url: canonical,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "TryLook-ai",
      url: TRYLOOK_MAIN_URL,
    },
    about: {
      "@type": "SoftwareApplication",
      name: "TryLook-ai",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        url: TRYLOOK_MAIN_URL,
      },
    },
    mainEntity: {
      "@type": "Product",
      name: `TryLook-ai for ${platformName}`,
      description: metaDescription,
      brand: { "@type": "Brand", name: "TryLook-ai" },
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={defaultOgImage} />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TryLookAI" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={defaultOgImage} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <article className="container flex max-w-3xl flex-col justify-center px-4 py-16 md:min-h-screen md:py-24">
          <p className="mb-6 font-inter text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {platformName}
          </p>
          <h1 className="font-playfair text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {h1}
          </h1>
          <p className="mt-6 font-inter text-lg font-medium leading-relaxed text-foreground/90 sm:text-xl">
            {subtitle}
          </p>
          <p className="mt-6 font-inter text-base leading-relaxed text-muted-foreground sm:text-lg">
            {body}
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="h-auto rounded-full px-8 py-6 text-base font-semibold shadow-md transition-transform hover:scale-[1.02]"
            >
              <a href={TRYLOOK_MAIN_URL} rel="noopener noreferrer" target="_blank">
                {CTA_LABEL}
              </a>
            </Button>
          </div>
        </article>
      </main>
    </>
  );
}

export default IntegrationLayout;
