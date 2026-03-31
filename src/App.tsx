import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";
import ShopifyVirtualTryOn from "./pages/seo/ShopifyVirtualTryOn";
import WooCommerceVirtualTryOn from "./pages/seo/WooCommerceVirtualTryOn";
import WebflowVirtualTryOn from "./pages/seo/WebflowVirtualTryOn";
import TiendanubeVirtualTryOn from "./pages/seo/TiendanubeVirtualTryOn";
import MercadoShopsVirtualTryOn from "./pages/seo/MercadoShopsVirtualTryOn";
import HostingerVirtualTryOn from "./pages/seo/HostingerVirtualTryOn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo" element={<Demo />} />
          {/* SEO orphan landing pages — not linked from nav/footer/sitemap */}
          <Route path="/shopify-virtual-try-on" element={<ShopifyVirtualTryOn />} />
          <Route path="/woocommerce-virtual-try-on" element={<WooCommerceVirtualTryOn />} />
          <Route path="/webflow-virtual-try-on" element={<WebflowVirtualTryOn />} />
          <Route path="/tiendanube-virtual-try-on" element={<TiendanubeVirtualTryOn />} />
          <Route path="/mercadoshops-virtual-try-on" element={<MercadoShopsVirtualTryOn />} />
          <Route path="/hostinger-virtual-try-on" element={<HostingerVirtualTryOn />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
