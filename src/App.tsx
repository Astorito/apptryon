import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";

const ShopifyVirtualTryOn = lazy(() => import("./pages/seo/ShopifyVirtualTryOn"));
const WooCommerceVirtualTryOn = lazy(() => import("./pages/seo/WooCommerceVirtualTryOn"));
const WebflowVirtualTryOn = lazy(() => import("./pages/seo/WebflowVirtualTryOn"));
const TiendanubeVirtualTryOn = lazy(() => import("./pages/seo/TiendanubeVirtualTryOn"));
const MercadoShopsVirtualTryOn = lazy(() => import("./pages/seo/MercadoShopsVirtualTryOn"));
const HostingerVirtualTryOn = lazy(() => import("./pages/seo/HostingerVirtualTryOn"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              className="min-h-screen bg-background"
              aria-busy="true"
              aria-label="Loading"
            />
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/demo" element={<Demo />} />
            {/* SEO landing pages — generated in dist/sitemap.xml; not linked from nav/footer */}
            <Route path="/shopify-virtual-try-on" element={<ShopifyVirtualTryOn />} />
            <Route path="/woocommerce-virtual-try-on" element={<WooCommerceVirtualTryOn />} />
            <Route path="/webflow-virtual-try-on" element={<WebflowVirtualTryOn />} />
            <Route path="/tiendanube-virtual-try-on" element={<TiendanubeVirtualTryOn />} />
            <Route path="/mercadoshops-virtual-try-on" element={<MercadoShopsVirtualTryOn />} />
            <Route path="/hostinger-virtual-try-on" element={<HostingerVirtualTryOn />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
