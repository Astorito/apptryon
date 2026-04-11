import { useEffect, useState } from "react";
import { PageMeta } from "@/components/seo/PageMeta";
import { DEMO_PAGE_DESCRIPTION, DEMO_PAGE_TITLE } from "@/lib/siteSeo";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { demoProducts } from "@/data/demoProducts";
import { useDemoTryOnWidget } from "@/hooks/useDemoTryOnWidget";

const Demo = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useDemoTryOnWidget();

  useEffect(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), 1200);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <PageMeta title={DEMO_PAGE_TITLE} description={DEMO_PAGE_DESCRIPTION} path="/demo" />
      <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex items-center h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-inter text-sm">Volver</span>
          </Link>
          <h1 className="font-playfair font-bold text-xl text-foreground mx-auto">
            Demo Try Look
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Products Grid */}
          <div>
            <h2 className="font-playfair text-2xl text-foreground mb-6">
              Selecciona un producto
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {demoProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/demo/product/${product.id}`}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer group block"
                >
                  <div className="aspect-[4/5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      draggable={true}
                      crossOrigin="anonymous"
                      className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                      onDragStart={(e) => {
                        e.dataTransfer.setData("text/uri-list", product.image);
                        e.dataTransfer.setData("text/plain", product.image);
                        e.dataTransfer.effectAllowed = "copy";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-inter font-medium text-foreground text-sm">
                      {product.name}
                    </h3>
                    <p className="font-inter text-muted-foreground text-sm mt-1">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Widget Container - Bottom Right */}
      {/* Radial lines around widget */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-none flex items-center justify-center w-16 h-16">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-primary/30 rounded-full"
            style={{
              width: 1.5,
              height: 18,
              transformOrigin: "center center",
              rotate: `${i * 45}deg`,
              translateY: -30,
            }}
            animate={{ opacity: [0.15, 0.5, 0.15], scaleY: [0.7, 1, 0.7] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Animated tooltip — bouncing, appears after 1.2s, disappears after 8s */}
      <AnimatePresence>
        {showTooltip && (
          <div className="fixed z-50 pointer-events-none" style={{ bottom: 88, right: 12 }}>

            {/* Tooltip bubble — bounces up and down */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <div
                className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-inter font-semibold text-white shadow-xl"
                style={{ backgroundColor: "hsl(28 31% 25%)", whiteSpace: "nowrap" }}
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  ✨
                </motion.span>
                Try it here
              </div>
            </motion.div>

            {/* Vertical bouncing arrow pointing down to widget */}
            <motion.div
              className="flex justify-center mt-1"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 0.75, ease: "easeInOut" }}
            >
              <span className="text-xl font-bold" style={{ color: "hsl(28 31% 35%)" }}>↓</span>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

      <div id="tryon-widget-container" className="fixed bottom-4 right-4 z-50" />
      </div>
    </>
  );
};

export default Demo;
