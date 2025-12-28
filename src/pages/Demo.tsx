import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const products = [
  // Fila 1
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
  // Fila 2
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
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj25?w=400&h=500&fit=crop",
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
  // Fila 3
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
    image: "https://images.unsplash.com/photo-1625910513413-5fc420e7ec7d?w=400&h=500&fit=crop",
  },
  {
    id: 12,
    name: "Vestido Cocktail",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
  },
  // Fila 4
  {
    id: 13,
    name: "Cardigan de Punto",
    price: "$64.99",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
  },
  {
    id: 14,
    name: "Shorts Deportivos",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
  },
  {
    id: 15,
    name: "Abrigo de Lana",
    price: "$189.99",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop",
  },
  {
    id: 16,
    name: "Top Crop",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop",
  },
  // Fila 5
  {
    id: 17,
    name: "Traje Formal",
    price: "$299.99",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop",
  },
  {
    id: 18,
    name: "Maxi Vestido",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
  },
  {
    id: 19,
    name: "Camisa Denim",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop",
  },
  {
    id: 20,
    name: "Pantalón Palazzo",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop",
  },
  // Fila 6
  {
    id: 21,
    name: "Jersey Oversize",
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
  },
  {
    id: 22,
    name: "Vestido Camisero",
    price: "$84.99",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
  },
  {
    id: 23,
    name: "Bomber Jacket",
    price: "$109.99",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
  },
  {
    id: 24,
    name: "Leggings Premium",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop",
  },
];

const Demo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tryon-backend-definitivo.vercel.app/api/widget";
    script.async = true;
    script.setAttribute("data-tryon-key", "demotryon01");
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://tryon-backend-definitivo.vercel.app/api/widget"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
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
            Demo TryOn
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
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Floating Widget Container - Bottom Right */}
      <div id="tryon-widget-container" className="fixed bottom-4 right-4 z-50" />
    </div>
  );
};

export default Demo;
