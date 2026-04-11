export type DemoProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  /** Nota editorial corta (PDP) */
  description: string;
  /** Precio tachado opcional (demo) */
  compareAtPrice?: string;
  /** Migas: categoría / subcategoría / detalle */
  breadcrumb: readonly [string, string, string];
};

export const demoProducts: readonly DemoProduct[] = [
  {
    id: 1,
    name: "Camiseta Básica Blanca",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    description:
      "Camiseta de algodón peinado con cuello redondo y caída suave. Base perfecta para looks minimalistas o como capa interior.",
    compareAtPrice: "$39.00",
    breadcrumb: ["Demo 24", "Básicos", "Camisetas"],
  },
  {
    id: 2,
    name: "Vestido Verano Floral",
    price: "$79.99",
    image: "/demo-vestido-floral.png",
    description:
      "Vestido ligero con estampado floral inspirado en jardines de verano. Tejido transpirable y silueta fluida para días cálidos.",
    compareAtPrice: "$110.00",
    breadcrumb: ["Demo 24", "Vestidos", "Floral"],
  },
  {
    id: 3,
    name: "Jeans Slim Fit",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    description:
      "Denim con corte slim y algo de elastano para comodidad. Lavado medio versátil para el día a día.",
    breadcrumb: ["Demo 24", "Denim", "Slim"],
  },
  {
    id: 4,
    name: "Blazer Casual",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    description:
      "Blazer entretiempo con hombros suaves y cierre sencillo. Eleva un look informal sin perder comodidad.",
    compareAtPrice: "$159.00",
    breadcrumb: ["Demo 24", "Abrigos", "Blazer"],
  },
  {
    id: 5,
    name: "Sudadera con Capucha",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    description:
      "Sudadera de felpa con capucha ajustable y bolsillo canguro. Ideal para capas en clima fresco.",
    breadcrumb: ["Demo 24", "Casual", "Sudaderas"],
  },
  {
    id: 6,
    name: "Falda Midi Plisada",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    description:
      "Falda midi con plisado regular y cintura definida. Combina con knit o camisa para oficina o evento.",
    breadcrumb: ["Demo 24", "Faldas", "Midi"],
  },
  {
    id: 7,
    name: "Camisa de Lino",
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    description:
      "Camisa de lino con transpiración natural y corte relajado. Esencial para climas cálidos o vacaciones.",
    breadcrumb: ["Demo 24", "Camisas", "Lino"],
  },
  {
    id: 8,
    name: "Pantalón Chino",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
    description:
      "Chino de talle medio con bolsillos laterales y pernera recta. Entre formal e informal sin esfuerzo.",
    breadcrumb: ["Demo 24", "Pantalones", "Chino"],
  },
  {
    id: 9,
    name: "Chaqueta de Cuero",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    description:
      "Chaqueta tipo biker con cierre asimétrico y cuello solapa. Pieza statement que envejece con carácter.",
    compareAtPrice: "$249.00",
    breadcrumb: ["Demo 24", "Abrigos", "Cuero"],
  },
  {
    id: 10,
    name: "Blusa Elegante",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop",
    description:
      "Blusa con detalle en cuello o mangas según temporada. Tejido fluido para looks de cena o trabajo creativo.",
    breadcrumb: ["Demo 24", "Blusas", "Elegante"],
  },
  {
    id: 11,
    name: "Polo Clásico",
    price: "$44.99",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=500&fit=crop",
    description:
      "Polo de piqué con cuello tres botones y manga corta. Uniforme informal con aire sport premium.",
    breadcrumb: ["Demo 24", "Casual", "Polos"],
  },
  {
    id: 12,
    name: "Vestido Cocktail",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    description:
      "Vestido corto de cóctel con silueta ceñida o evasé según diseño. Pensado para eventos nocturnos.",
    compareAtPrice: "$189.00",
    breadcrumb: ["Demo 24", "Vestidos", "Cocktail"],
  },
  {
    id: 13,
    name: "Cardigan de Punto",
    price: "$64.99",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    description:
      "Cardigan de punto medio con botones o abierto. Capa cálida sobre camiseta o camisa.",
    breadcrumb: ["Demo 24", "Punto", "Cardigan"],
  },
  {
    id: 14,
    name: "Shorts Deportivos",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
    description:
      "Shorts ligeros con buena transpiración para entrenamiento o día relajado. Cintura elástica o cordón.",
    breadcrumb: ["Demo 24", "Sport", "Shorts"],
  },
  {
    id: 15,
    name: "Abrigo de Lana",
    price: "$189.99",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop",
    description:
      "Abrigo largo de mezcla de lana con solapas amplias. Protección seria contra el frío urbano.",
    compareAtPrice: "$229.00",
    breadcrumb: ["Demo 24", "Abrigos", "Lana"],
  },
  {
    id: 16,
    name: "Top Crop",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop",
    description:
      "Top corto para combinar con talle alto o capas. Tejido suave y versátil para temporada cálida.",
    breadcrumb: ["Demo 24", "Tops", "Crop"],
  },
  {
    id: 17,
    name: "Traje Formal",
    price: "$299.99",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop",
    description:
      "Conjunto formal con chaqueta y pantalón coordinados. Silueta clásica para ceremonias o negocios.",
    compareAtPrice: "$379.00",
    breadcrumb: ["Demo 24", "Formal", "Traje"],
  },
  {
    id: 18,
    name: "Maxi Vestido",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
    description:
      "Vestido largo hasta el tobillo con movimiento al caminar. Ideal para eventos al aire libre o vacaciones.",
    breadcrumb: ["Demo 24", "Vestidos", "Maxi"],
  },
  {
    id: 19,
    name: "Camisa Denim",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop",
    description:
      "Camisa en denim medio con bolsillos de pecho opcionales. Estética workwear actualizada.",
    breadcrumb: ["Demo 24", "Camisas", "Denim"],
  },
  {
    id: 20,
    name: "Pantalón Palazzo",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop",
    description:
      "Pantalón de pierna ancha y tiro alto. Volumen elegante que alarga la silueta con sandalias o tacones.",
    breadcrumb: ["Demo 24", "Pantalones", "Palazzo"],
  },
  {
    id: 21,
    name: "Jersey Oversize",
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    description:
      "Jersey de punto grueso con hombros caídos y largo generoso. Look relajado tipo street.",
    breadcrumb: ["Demo 24", "Punto", "Oversize"],
  },
  {
    id: 22,
    name: "Vestido Camisero",
    price: "$84.99",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    description:
      "Vestido inspirado en camisa con botonadura frontal y cinturón opcional. Cómodo y pulcro a la vez.",
    breadcrumb: ["Demo 24", "Vestidos", "Camisero"],
  },
  {
    id: 23,
    name: "Bomber Jacket",
    price: "$109.99",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
    description:
      "Bomber con ribetes en puños y cuello, cierre central. Capa ligera con herencia aviadora.",
    breadcrumb: ["Demo 24", "Abrigos", "Bomber"],
  },
  {
    id: 24,
    name: "Leggings Premium",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop",
    description:
      "Leggings de compresión suave con buena opacidad. Para yoga, running o streetwear athleisure.",
    breadcrumb: ["Demo 24", "Sport", "Leggings"],
  },
];

export function getDemoProductById(id: number): DemoProduct | undefined {
  return demoProducts.find((p) => p.id === id);
}

/** Otros productos para “Complement the Look” (estable por id). */
export function getDemoProductComplements(currentId: number, count = 2): DemoProduct[] {
  const others = demoProducts.filter((p) => p.id !== currentId);
  if (others.length === 0) return [];
  const start = currentId % others.length;
  const out: DemoProduct[] = [];
  for (let i = 0; i < count; i++) {
    out.push(others[(start + i) % others.length]!);
  }
  return out;
}
