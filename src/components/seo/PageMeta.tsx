import { Helmet } from "react-helmet-async";
import { defaultOgImage, getCanonicalUrl } from "@/data/seoIntegrationPages";

export type PageMetaProps = {
  title: string;
  description: string;
  /** Path only, e.g. "/" or "/demo" */
  path: string;
  ogTitle?: string;
  ogImage?: string;
  /** Use on 404 and soft-error pages so they are not indexed as duplicates */
  noindex?: boolean;
};

export function PageMeta({
  title,
  description,
  path,
  ogTitle,
  ogImage = defaultOgImage,
  noindex = false,
}: PageMetaProps) {
  const canonical = getCanonicalUrl(path);
  const ogT = ogTitle ?? title;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {!noindex && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogT} />
      <meta property="og:description" content={description} />
      {!noindex && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TryLookAI" />
      <meta name="twitter:title" content={ogT} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
