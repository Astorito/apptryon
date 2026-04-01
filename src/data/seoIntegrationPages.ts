export type IntegrationPageConfig = {
  /** Display name for structured data / breadcrumbs */
  platformName: string;
  /** Serif hero: [before, italic segment, after] */
  heroHeadlineParts: readonly [string, string, string];
  subtitle: string;
  body: string;
  /** <title> — optimized for SERP (unique per page) */
  pageTitle: string;
  /** meta description — unique, ~150–160 chars where possible */
  metaDescription: string;
  /** Path segment only, e.g. /shopify-virtual-try-on */
  path: string;
  heroImageUrl: string;
  heroImageAlt: string;
  /** Short line on the image pill (outfit / AI focus) */
  heroOverlayLabel: string;
  /** Line next to CTA (e.g. social proof) */
  trustLine: string;
};

const OG_FALLBACK =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/psvUGaV5trMfcevbuwUmBbjk5fi2/social-images/social-1764985510263-Generated Image September 02, 2025 - 12_19PM.jpeg";

export const TRYLOOK_MAIN_URL = "https://www.trylook-ai.com/" as const;

/** Distinct Unsplash scenes: different models and outfits per integration page */
const IMG = {
  shopify:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&h=900&fit=crop&q=80",
  woocommerce:
    "https://images.unsplash.com/photo-1496747611176-8432226b57ba?w=900&h=900&fit=crop&q=80",
  webflow:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&h=900&fit=crop&q=80",
  tiendanube:
    "https://images.unsplash.com/photo-1515372039744-b8f02a3cd446?w=900&h=900&fit=crop&q=80",
  mercadoshops:
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&h=900&fit=crop&q=80",
  hostinger:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=900&fit=crop&q=80",
} as const;

export const seoIntegrationPages = {
  shopify: {
    platformName: "Shopify",
    path: "/shopify-virtual-try-on",
    heroHeadlineParts: ["The Future of ", "Fitting", " is Digital."],
    subtitle:
      "Boost your Shopify store's conversion rate and slash returns with hyper-realistic virtual fitting.",
    body: "Shopify users know that friction at checkout kills sales. With the TryLook-ai widget, your customers can upload a selfie and see themselves wearing your clothes instantly. No coding required, seamlessly integrated, and optimized for Shopify's lightning-fast loading speeds. Give your shoppers the absolute confidence to buy.",
    pageTitle: "Virtual Try-On Plugin for Shopify | TryLook-ai",
    metaDescription:
      "Boost Shopify conversions and cut returns with TryLook-ai: AI virtual try-on, no code, fast load times. Let shoppers see clothes on themselves before they buy.",
    heroImageUrl: IMG.shopify,
    heroImageAlt:
      "Model in a yellow crop top and wide-leg trousers — virtual try-on preview for a Shopify fashion store.",
    heroOverlayLabel: "Outfit preview: streetwear → evening",
    trustLine: "Top rated virtual try-on experience",
  },
  woocommerce: {
    platformName: "WooCommerce",
    path: "/woocommerce-virtual-try-on",
    heroHeadlineParts: ["Confidence ", "Sells", " Before Checkout."],
    subtitle:
      "Integrate the leading AI virtual fitting room into your WordPress e-commerce in minutes.",
    body: "Running your store on WooCommerce gives you total control, but you need tools that make your brand stand out. TryLook-ai deploys easily within your current architecture. Give your customers the confidence to try on clothes virtually, skyrocketing your average order value (AOV) and drastically lowering reverse logistics costs.",
    pageTitle: "Virtual Try-On Plugin for WooCommerce | TryLook-ai",
    metaDescription:
      "Add TryLook-ai to WooCommerce in minutes: AI virtual fitting for WordPress stores. Lift AOV, cut returns, and give shoppers confidence to buy.",
    heroImageUrl: IMG.woocommerce,
    heroImageAlt:
      "Model on a runway in a flowing dress — WooCommerce store virtual fitting room context.",
    heroOverlayLabel: "Look swap: runway → everyday",
    trustLine: "Built for WordPress merchants",
  },
  webflow: {
    platformName: "Webflow",
    path: "/webflow-virtual-try-on",
    heroHeadlineParts: ["Design That ", "Fits", " Every Layout."],
    subtitle:
      "Maintain your premium web design while integrating cutting-edge AI fitting technology.",
    body: "You chose Webflow for absolute design control. TryLook-ai is a lightweight, aesthetic widget that integrates via a simple custom code embed. It doesn't break your UI/UX; it enhances it. Turn catalog browsers into confident buyers by showing them exactly how your garments fit in real-time.",
    pageTitle: "Virtual Try-On for Webflow E-commerce | TryLook-ai",
    metaDescription:
      "TryLook-ai for Webflow: lightweight AI virtual try-on via embed. Keep your design, add real-time fitting, and convert more browsers into buyers.",
    heroImageUrl: IMG.webflow,
    heroImageAlt:
      "Portrait of a model in a black blazer — editorial look for a Webflow storefront preview.",
    heroOverlayLabel: "Style: editorial → casual layers",
    trustLine: "Embeds without breaking your grid",
  },
  tiendanube: {
    platformName: "Tiendanube",
    path: "/tiendanube-virtual-try-on",
    heroHeadlineParts: ["Your Store, ", "Their Fit", ", Zero Guesswork."],
    subtitle: "Revolutionize your Tiendanube brand: let your customers try before they buy.",
    body: "Standing out in the Tiendanube ecosystem requires more than just high-quality product photos. Deploy the TryLook-ai widget and let your customers discover their perfect fit and style by uploading a simple photo. Increase consumer trust, reduce sizing questions, and multiply your apparel sales effortlessly.",
    pageTitle: "Virtual Try-On for Tiendanube | TryLook-ai",
    metaDescription:
      "TryLook-ai for Tiendanube (Nuvemshop): virtual try-on from a photo. Build trust, reduce sizing questions, and grow apparel sales.",
    heroImageUrl: IMG.tiendanube,
    heroImageAlt:
      "Two fashion models in coordinated outfits — Tiendanube apparel catalog visualization.",
    heroOverlayLabel: "Cambio visual: look A → look B",
    trustLine: "Trusted by growing LATAM brands",
  },
  mercadoshops: {
    platformName: "Mercado Shops",
    path: "/mercadoshops-virtual-try-on",
    heroHeadlineParts: ["Stand ", "Out", " Where Shoppers Scroll."],
    subtitle:
      "Differentiate your brand on Mercado Shops with an interactive AI fitting room.",
    body: 'Selling on Mercado Shops gives you great infrastructure, but the apparel competition is fierce. Adding the TryLook-ai widget to your independent store positions you as an innovative, customer-first brand. Reduce "how does it fit?" inquiries and give your buyers the visual certainty they need to hit "Buy Now".',
    pageTitle: "Virtual Try-On for Mercado Shops | TryLook-ai",
    metaDescription:
      "Stand out on Mercado Shops with TryLook-ai: AI virtual fitting room, fewer fit questions, and clearer purchase confidence for apparel buyers.",
    heroImageUrl: IMG.mercadoshops,
    heroImageAlt:
      "Model in sunglasses and leather jacket — bold street style for Mercado Shops listings.",
    heroOverlayLabel: "Provador: street → gala",
    trustLine: "Fewer “how does it fit?” messages",
  },
  hostinger: {
    platformName: "Hostinger",
    path: "/hostinger-virtual-try-on",
    heroHeadlineParts: ["Build Fast. ", "Dress Smarter", ", Sell More."],
    subtitle:
      "Take your Hostinger-built e-commerce to the next level with AI clothing try-on.",
    body: "Building your store with the Hostinger website builder was easy; installing TryLook-ai is just as simple. Through a quick integration, your catalog will come to life. Allow your users to interact with your garments and visualize themselves wearing them. More confidence for the customer means more revenue for you.",
    pageTitle: "Virtual Try-On for Hostinger Stores | TryLook-ai",
    metaDescription:
      "TryLook-ai for Hostinger website builder stores: quick AI clothing try-on integration. Help shoppers visualize fits and grow revenue.",
    heroImageUrl: IMG.hostinger,
    heroImageAlt:
      "Shoppers with bags in a bright mall setting — Hostinger store discovery and try-on.",
    heroOverlayLabel: "Day outfit → night out (AI)",
    trustLine: "Quick install on your builder site",
  },
} as const satisfies Record<string, IntegrationPageConfig>;

export type SeoIntegrationSlug = keyof typeof seoIntegrationPages;

export function getCanonicalUrl(path: string): string {
  const envBase = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  const base = envBase || (typeof window !== "undefined" ? window.location.origin : "");
  return `${base}${path}`;
}

/** Default OG when a page does not set its own image */
export const defaultOgImage = OG_FALLBACK;
