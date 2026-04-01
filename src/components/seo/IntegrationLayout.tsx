import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { IntegrationPageConfig } from "@/data/seoIntegrationPages";
import {
  TRYLOOK_MAIN_URL,
  getCanonicalUrl,
} from "@/data/seoIntegrationPages";

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
  heroImageUrl,
  heroImageAlt,
  heroOverlayLabel,
  trustLine,
}: IntegrationLayoutProps) {
  const canonical = getCanonicalUrl(path);
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
      image: heroImageUrl,
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
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TryLookAI" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={heroImageUrl} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="seo-integration-page flex min-h-screen flex-col bg-[#faf9f8] text-[#1a1c1c] selection:bg-[#ba9a7c] selection:text-[#48321b]">
        <header className="z-50 w-full shrink-0">
          <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
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

        <main className="flex min-h-0 flex-1 items-center overflow-x-hidden py-10 md:py-0">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex max-w-xl flex-col justify-center">
              <span className="mb-4 font-body text-xs font-bold uppercase tracking-[0.25em] text-[#74593f] md:mb-6">
                Virtual Try-On for {platformName}
              </span>
              <h1 className="mb-6 font-headline text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1c1c] sm:text-5xl lg:text-6xl xl:text-7xl">
                {beforeItalic}
                <span className="font-normal italic">{italic}</span>
                {afterItalic}
              </h1>
              <p className="mb-6 max-w-lg font-body text-lg leading-relaxed text-[#4e453d]">
                {subtitle}
              </p>
              <p className="mb-8 max-w-lg font-body text-base leading-relaxed text-[#4e453d]/90 sm:text-lg">
                {body}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={TRYLOOK_MAIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#74593f] to-[#ba9a7c] px-8 py-4 font-body text-base font-bold text-white shadow-xl shadow-[#74593f]/10 transition-all hover:opacity-95 sm:px-10 sm:py-5 sm:text-lg"
                >
                  {CTA_LABEL}
                </a>
                <div className="flex items-center gap-2 font-body text-sm font-semibold text-[#4e453d]">
                  <Star
                    className="h-5 w-5 shrink-0 fill-[#74593f] text-[#74593f]"
                    aria-hidden
                  />
                  {trustLine}
                </div>
              </div>

              <div className="mt-12 border-t border-[#d2c4b9]/40 pt-8 md:mt-16">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4e453d]/40">
                  Trusted by apparel brands
                </p>
                <div className="flex flex-wrap gap-6 font-headline text-xs font-bold italic text-[#1a1c1c]/25 grayscale sm:gap-8">
                  <span>L&apos;AUBE</span>
                  <span>MODERNE</span>
                  <span>Sartoria</span>
                  <span>NOIR</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <img
                  src={heroImageUrl}
                  alt={heroImageAlt}
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute bottom-4 left-1/2 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-3 rounded-full border border-white/30 bg-[rgba(250,249,248,0.7)] px-4 py-2.5 shadow-lg backdrop-blur-md sm:bottom-6 sm:px-6 sm:py-3">
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
              </div>
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

        <footer className="shrink-0 py-8">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 px-6 text-[11px] font-body font-bold uppercase tracking-widest text-[#4e453d]/50 md:flex-row md:items-center md:px-12">
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
