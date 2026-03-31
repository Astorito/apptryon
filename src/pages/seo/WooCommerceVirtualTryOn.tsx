import { IntegrationLayout } from "@/components/seo/IntegrationLayout";
import { seoIntegrationPages } from "@/data/seoIntegrationPages";

export default function WooCommerceVirtualTryOn() {
  return <IntegrationLayout {...seoIntegrationPages.woocommerce} />;
}
