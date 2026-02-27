import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Camiseta Básica Blanca",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Vestido Verano Floral",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Jeans Slim Fit",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Blazer Casual",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    name: "Sudadera con Capucha",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
  },
  {
    id: 6,
    name: "Falda Midi Plisada",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
  },
  {
    id: 7,
    name: "Camisa de Lino",
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
  },
  {
    id: 8,
    name: "Pantalón Chino",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
  },
  {
    id: 9,
    name: "Chaqueta de Cuero",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
  },
  {
    id: 10,
    name: "Blusa Elegante",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop",
  },
  {
    id: 11,
    name: "Polo Clásico",
    price: "$44.99",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=500&fit=crop",
  },
  {
    id: 12,
    name: "Vestido Cocktail",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1566479179817-3de86e44bd7f?w=400&h=500&fit=crop",
  },
];

const Demo = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const scriptSrc = "https://try-on-cursor.vercel.app/api/widget";
    const oldScripts = document.querySelectorAll('script[src*="organic-space-fishstick"], script[src*="tryon-backend-definitivo"]');
    oldScripts.forEach(s => s.remove());
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.setAttribute("data-tryon-key", "tryon_mlqqsbsv_rhyiqjlu");
      document.head.appendChild(script);
    }

    // Show tooltip after 1.2s, hide after 6s
    const showTimer = setTimeout(() => setShowTooltip(true), 1200);
    const hideTimer = setTimeout(() => setShowTooltip(false), 7000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
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
          <div>
            <h2 className="font-playfair text-2xl text-foreground mb-6">
              Selecciona un producto
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer group"
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
                    <h3 className="font-inter font-medium text-foreground text-sm">{product.name}</h3>
                    <p className="font-inter text-muted-foreground text-sm mt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Radial lines around widget */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-none flex items-center justify-center w-16 h-16">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-primary/30 rounded-full"
            style={{ width: 1.5, height: 18, transformOrigin: "center center", rotate: `${i * 45}deg`, translateY: -30 }}
            animate={{ opacity: [0.15, 0.5, 0.15], scaleY: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}
      </div>

      {/* Animated tooltip — appears after 1.2s, disappears after 6s or on hover */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{ bottom: 80, right: 16 }}
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 16, y: 8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Tooltip bubble */}
            <div
              className="relative flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-inter font-semibold text-white shadow-xl"
              style={{ backgroundColor: "hsl(28 31% 25%)", whiteSpace: "nowrap" }}
            >
              {/* Sparkle */}
              <motion.span
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="text-base"
              >
                ✨
              </motion.span>
              Try it here →

              {/* Arrow pointing down-right to widget */}
              <div
                className="absolute"
                style={{
                  bottom: -8,
                  right: 20,
                  width: 0,
                  height: 0,
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: "8px solid hsl(28 31% 25%)",
                }}
              />
            </div>

            {/* Bouncing arrow below tooltip */}
            <motion.div
              className="flex justify-end pr-6 mt-1"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            >
              <span className="text-lg" style={{ color: "hsl(28 31% 45%)" }}>↓</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="tryon-widget-container" className="fixed bottom-4 right-4 z-50" />
    </div>
  );
};

export default Demo;