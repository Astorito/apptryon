import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
];

const Demo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tryon-backend-delta.vercel.app/widget-box.js";
    script.setAttribute("data-tryon-key", "testtryon01");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://tryon-backend-delta.vercel.app/widget-box.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
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
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side - Products */}
          <div className="lg:col-span-3">
            <h2 className="font-playfair text-2xl text-foreground mb-6">
              Selecciona un producto
            </h2>
            <div className="grid grid-cols-2 gap-4">
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

          {/* Right Side - Widget Area */}
          <div className="lg:col-span-2 flex flex-col">
            <h2 className="font-playfair text-2xl text-foreground mb-6">
              Prueba virtual
            </h2>
            <div className="flex-1 bg-card rounded-xl border border-border p-4 min-h-[500px] flex items-end justify-center">
              {/* Widget will be injected here by the script */}
              <div id="tryon-widget-container" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
