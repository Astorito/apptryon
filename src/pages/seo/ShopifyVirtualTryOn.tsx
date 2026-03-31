import { IntegrationLayout } from "@/components/seo/IntegrationLayout";
import { seoIntegrationPages } from "@/data/seoIntegrationPages";

export default function ShopifyVirtualTryOn() {
  return <IntegrationLayout {...seoIntegrationPages.shopify} />;
}
