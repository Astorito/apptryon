import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { IntegrationPageConfig } from "@/data/seoIntegrationPages";
import {
  TRYLOOK_MAIN_URL,
  SEO_HERO_AFTER,
  SEO_HERO_BEFORE,
  absoluteAssetUrl,
  getCanonicalUrl,
} from "@/data/seoIntegrationPages";
import { BeforeAfterSlider } from "@/components/seo/BeforeAfterSlider";

export type IntegrationLayoutProps = IntegrationPageConfig;

const CTA_LABEL = "Get TryLook-ai";

export function IntegrationLayout({
  platformName,
  heroHeadlineParts,
  subtitle,
  body,
  pageTitle,
  metaDescription,
  path,
  heroImageBeforeUrl = SEO_HERO_BEFORE,
  heroImageAfterUrl = SEO_HERO_AFTER,
  heroImageAlt,
  heroOverlayLabel,
  trustLine,
}: IntegrationLayoutProps) {
  const canonical = getCanonicalUrl(path);
  const ogImage =
    heroImageAfterUrl.startsWith("http") ? heroImageAfterUrl : absoluteAssetUrl(heroImageAfterUrl);
  const [beforeItalic, italic, afterItalic] = heroHeadlineParts;

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
      url: getCanonicalUrl("/"),
    },
    about: {
      "@type": "SoftwareApplication",
      name: "TryLook-ai",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        url: getCanonicalUrl("/"),
      },
    },
    mainEntity: {
      "@type": "Product",
      name: `TryLook-ai for ${platformName}`,
      description: metaDescription,
      brand: { "@type": "Brand", name: "TryLook-ai" },
      image: ogImage,
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
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TryLookAI" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="seo-integration-page fixed inset-0 z-40 flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-[#faf9f8] text-[#1a1c1c] selection:bg-[#ba9a7c] selection:text-[#48321b]">
        <header className="z-50 w-full shrink-0">
          <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 md:px-10 md:py-4 lg:px-12">
            <Link
              to="/"
              className="font-headline text-xl italic text-[#1a1c1c] md:text-2xl"
            >
              TryLook-ai
            </Link>
            <div className="hidden items-center gap-8 md:flex md:gap-12">
              <Link
                to="/"
                className="font-body text-sm tracking-wide text-[#1a1c1c]/70 transition-colors hover:text-[#74593f]"
              >
                Home
              </Link>
              <Link
                to="/demo"
                className="font-body text-sm tracking-wide text-[#1a1c1c]/70 transition-colors hover:text-[#74593f]"
              >
                Demo
              </Link>
              <a
                href={TRYLOOK_MAIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-br from-[#74593f] to-[#ba9a7c] px-6 py-2.5 font-body text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
              >
                Website
              </a>
            </div>
          </nav>
        </header>

        <main className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden lg:flex-row">
          <div className="mx-auto grid h-full min-h-0 w-full max-w-[1440px] grid-cols-1 content-center items-center gap-3 px-4 py-2 md:gap-4 md:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-0">
            <div className="flex min-h-0 min-w-0 max-w-xl flex-col justify-center overflow-hidden lg:max-h-full lg:py-2">
              <span className="mb-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-[#74593f] sm:text-xs md:mb-2 md:tracking-[0.25em]">
                Virtual Try-On for {platformName}
              </span>
              <h1 className="mb-2 font-headline text-2xl font-bold leading-[1.08] tracking-tight text-[#1a1c1c] sm:text-3xl md:mb-3 md:text-4xl lg:text-[clamp(1.75rem,3.2vw,3rem)] xl:text-[clamp(2rem,3.5vw,3.5rem)]">
                {beforeItalic}
                <span className="font-normal italic">{italic}</span>
                {afterItalic}
              </h1>
              <p className="mb-2 max-w-lg font-body text-sm leading-snug text-[#4e453d] sm:text-base md:mb-3">
                {subtitle}
              </p>
              <p className="mb-3 max-w-lg font-body text-xs leading-snug text-[#4e453d]/90 sm:text-sm md:mb-4 line-clamp-3 sm:line-clamp-4 lg:line-clamp-4 2xl:line-clamp-none">
                {body}
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 md:gap-5">
                <a
                  href={TRYLOOK_MAIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#74593f] to-[#ba9a7c] px-6 py-3 font-body text-sm font-bold text-white shadow-lg shadow-[#74593f]/10 transition-all hover:opacity-95 sm:px-8 sm:py-3.5 sm:text-base"
                >
                  {CTA_LABEL}
                </a>
                <div className="flex items-center gap-1.5 font-body text-xs font-semibold text-[#4e453d] sm:text-sm">
                  <Star
                    className="h-4 w-4 shrink-0 fill-[#74593f] text-[#74593f] sm:h-5 sm:w-5"
                    aria-hidden
                  />
                  {trustLine}
                </div>
              </div>

              <div className="mt-3 border-t border-[#d2c4b9]/40 pt-3 md:mt-4 md:pt-4">
                <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#4e453d]/40 md:mb-2 md:text-[10px] md:tracking-[0.3em]">
                  Trusted by apparel brands
                </p>
                <div className="flex flex-wrap gap-3 font-headline text-[10px] font-bold italic text-[#1a1c1c]/25 grayscale sm:gap-5 sm:text-xs md:gap-8">
                  <span>L&apos;AUBE</span>
                  <span>MODERNE</span>
                  <span>Sartoria</span>
                  <span>NOIR</span>
                </div>
              </div>
            </div>

            <div className="relative flex min-h-0 w-full min-w-0 items-center justify-center lg:max-h-full lg:py-1">
              <BeforeAfterSlider
                beforeSrc={heroImageBeforeUrl}
                afterSrc={heroImageAfterUrl}
                comparisonLabel={heroImageAlt}
                beforeLabel="Before"
                afterLabel="After"
                overlay={
                  <div className="flex items-center gap-3 rounded-full border border-white/30 bg-[rgba(250,249,248,0.7)] px-4 py-2.5 shadow-lg backdrop-blur-md sm:px-6 sm:py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#74593f]"
                        aria-hidden
                      />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1c1c]">
                        {heroOverlayLabel}
                      </span>
                    </div>
                  </div>
                }
              />
              <div
                className="pointer-events-none absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-[#ba9a7c]/10 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-[#f3dfcf]/40 blur-3xl"
                aria-hidden
              />
            </div>
          </div>
        </main>

        <footer className="shrink-0 py-2 md:py-3">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-2 px-4 text-[10px] font-body font-bold uppercase tracking-widest text-[#4e453d]/50 md:flex-row md:items-center md:gap-4 md:px-10 md:text-[11px] lg:px-12">
            <div>© {new Date().getFullYear()} TryLook-ai</div>
            <div className="flex flex-wrap gap-6">
              <a
                href={`${TRYLOOK_MAIN_URL}`}
                className="transition-colors hover:text-[#74593f]"
              >
                Product
              </a>
              <Link to="/demo" className="transition-colors hover:text-[#74593f]">
                Demo
              </Link>
              <a
                href={TRYLOOK_MAIN_URL}
                className="transition-colors hover:text-[#74593f]"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default IntegrationLayout;
