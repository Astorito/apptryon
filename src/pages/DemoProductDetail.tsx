import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  BookOpen,
  Eye,
  Home,
  Layers,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  User,
} from "lucide-react";
import { PageMeta } from "@/components/seo/PageMeta";
import { absoluteAssetUrl } from "@/data/seoIntegrationPages";
import {
  getDemoProductById,
  getDemoProductComplements,
} from "@/data/demoProducts";
import { useDemoTryOnWidget } from "@/hooks/useDemoTryOnWidget";

const SIZES = ["S", "M", "L", "XL"] as const;

export default function DemoProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const id = productId ? parseInt(productId, 10) : NaN;
  const product = Number.isFinite(id) ? getDemoProductById(id) : undefined;
  const [size, setSize] = useState<(typeof SIZES)[number]>("M");

  useDemoTryOnWidget();

  const complements = useMemo(
    () => (product ? getDemoProductComplements(product.id, 2) : []),
    [product],
  );

  const ogImage = useMemo(() => {
    if (!product) return undefined;
    return product.image.startsWith("http")
      ? product.image
      : absoluteAssetUrl(product.image);
  }, [product]);

  if (!product || Number.isNaN(id)) {
    return <Navigate to="/demo" replace />;
  }

  const [bc1, bc2, bc3] = product.breadcrumb;

  return (
    <>
      <PageMeta
        title={`${product.name} | Demo Try Look`}
        description={product.description}
        path={`/demo/product/${product.id}`}
        noindex
        ogImage={ogImage}
      />
      <div className="min-h-[100dvh] overflow-hidden bg-curated-bg font-body text-curated-onBg antialiased">
        <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-stone-200/10 bg-curated-stoneNav/80 px-6 py-3 backdrop-blur-xl md:px-8 md:py-4">
          <Link
            to="/demo"
            className="font-headline text-lg italic tracking-widest text-curated-onBg md:text-xl"
          >
            Try Look
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/demo"
              className="font-headline text-sm font-semibold italic tracking-tight text-curated-onBg transition-colors hover:text-curated-outline"
            >
              Catálogo
            </Link>
            <span className="font-headline text-sm italic text-curated-outline/80">
              Lookbook
            </span>
            <span className="font-headline text-sm italic text-curated-outline/80">
              Archivo
            </span>
          </nav>
          <div className="flex items-center gap-4 text-curated-onBg">
            <Search className="h-5 w-5 cursor-pointer transition-transform hover:scale-110" aria-hidden />
            <User className="h-5 w-5 cursor-pointer transition-transform hover:scale-110" aria-hidden />
            <div className="relative cursor-pointer">
              <ShoppingBag className="h-5 w-5 transition-transform hover:scale-110" aria-hidden />
              <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-curated-primary text-[9px] text-curated-onPrimary">
                1
              </span>
            </div>
          </div>
        </header>

        <aside className="fixed right-0 top-0 z-40 hidden h-full w-16 flex-col items-center gap-8 border-l border-stone-200/10 bg-stone-100/40 py-10 backdrop-blur-md lg:flex">
          <span className="mb-6 origin-center rotate-90 whitespace-nowrap font-headline text-xs text-curated-onBg">
            DEMO
          </span>
          <Layers className="h-5 w-5 text-curated-outline" aria-hidden />
          <BookOpen className="h-5 w-5 text-curated-outline" aria-hidden />
          <Package className="h-5 w-5 text-curated-outline" aria-hidden />
          <Sparkles className="h-5 w-5 text-curated-outline" aria-hidden />
        </aside>

        <main className="flex h-[100dvh] flex-col overflow-hidden pt-14 md:flex-row lg:pr-16">
          <section className="relative flex h-[42vh] w-full shrink-0 items-center justify-center overflow-hidden bg-curated-surfaceLow p-4 md:h-full md:w-[40%] md:p-8 lg:w-[48%] lg:p-12">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center"
              crossOrigin="anonymous"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 font-body text-[9px] uppercase tracking-widest text-curated-onBg/60 md:left-8 md:top-6">
              <Link to="/demo" className="transition-colors hover:text-curated-primary">
                {bc1}
              </Link>
              <span>/</span>
              <span className="transition-colors hover:text-curated-primary">{bc2}</span>
              <span>/</span>
              <span className="font-bold text-curated-onBg">{bc3}</span>
            </div>
          </section>

          <section className="demo-pdp-scrollbar flex h-[58vh] w-full flex-col overflow-y-auto bg-curated-surface p-4 pb-24 md:h-full md:w-[60%] md:p-8 lg:w-[52%] lg:p-12">
            <div className="demo-glass-panel flex max-h-fit flex-col rounded-lg p-6 shadow-sm md:p-8">
              <div className="mb-6 shrink-0">
                <span className="mb-2 block font-body text-[9px] font-bold uppercase tracking-[0.2em] text-curated-outline">
                  Nueva colección
                </span>
                <h1 className="font-headline text-3xl italic leading-tight text-curated-onSurface md:text-4xl lg:text-5xl">
                  {product.name}
                </h1>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-body text-xl font-light text-curated-primary">
                    {product.price}
                  </span>
                  {product.compareAtPrice ? (
                    <span className="font-body text-xs text-curated-outline line-through">
                      {product.compareAtPrice}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="flex min-h-0 flex-grow flex-col justify-between space-y-6 overflow-hidden">
                <div className="space-y-2">
                  <h3 className="font-body text-[9px] font-extrabold uppercase tracking-widest text-curated-onSurface">
                    Nota editorial
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-curated-onSurfaceVariant lg:text-base">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-body text-[9px] font-extrabold uppercase tracking-widest text-curated-onSurface">
                      Talla
                    </h3>
                    <button
                      type="button"
                      className="font-body text-[9px] uppercase tracking-widest text-curated-outline underline transition-colors hover:text-curated-primary"
                    >
                      Guía de tallas
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSize(s)}
                        className={`flex h-10 w-10 items-center justify-center rounded-full border font-body text-[10px] transition-colors ${
                          size === s
                            ? "border-curated-primary bg-curated-primary text-curated-onPrimary shadow-md"
                            : "border-curated-outlineVariant/30 hover:bg-curated-surfaceHigh"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    className="w-full rounded-full bg-curated-primary py-4 font-body text-[10px] font-bold uppercase tracking-widest text-curated-onPrimary shadow-md transition-all hover:bg-curated-primaryDim"
                  >
                    Agregar al carrito
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 font-body text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:opacity-90"
                    onClick={() =>
                      document
                        .getElementById("tryon-widget-container")
                        ?.scrollIntoView({ behavior: "smooth", block: "nearest" })
                    }
                  >
                    <Eye className="h-4 w-4" aria-hidden />
                    Trylook
                  </button>
                </div>

                <div className="flex-shrink-0 space-y-3 border-t border-curated-outlineVariant/10 pt-4">
                  <div className="group flex cursor-pointer items-center justify-between">
                    <span className="font-body text-[9px] uppercase tracking-widest text-curated-onSurface">
                      Material y cuidado
                    </span>
                    <Plus className="h-4 w-4 text-curated-outline transition-colors group-hover:text-curated-primary" />
                  </div>
                  <div className="group flex cursor-pointer items-center justify-between">
                    <span className="font-body text-[9px] uppercase tracking-widest text-curated-onSurface">
                      Envíos y devoluciones
                    </span>
                    <Plus className="h-4 w-4 text-curated-outline transition-colors group-hover:text-curated-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 shrink-0">
              <h4 className="mb-4 font-headline text-lg italic">Complementa el look</h4>
              <div className="grid grid-cols-2 gap-4">
                {complements.map((c) => (
                  <Link
                    key={c.id}
                    to={`/demo/product/${c.id}`}
                    className="group flex cursor-pointer items-center gap-3 rounded-lg bg-white/40 p-2 transition-colors hover:bg-white/60"
                  >
                    <div className="h-20 w-16 shrink-0 overflow-hidden rounded bg-curated-surfaceHighest">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 font-body text-[8px] uppercase tracking-tight text-curated-onBg">
                        {c.name}
                      </p>
                      <span className="text-[9px] font-bold text-curated-primary">{c.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <nav className="fixed bottom-0 z-50 flex w-full items-center justify-between border-t border-stone-200/20 bg-curated-stoneNav/90 px-8 py-3 backdrop-blur-xl md:hidden">
          <Link to="/demo" className="flex flex-col items-center gap-0.5 text-curated-onBg">
            <Home className="h-5 w-5" aria-hidden />
            <span className="text-[7px] font-bold uppercase tracking-widest">Catálogo</span>
          </Link>
          <Link to="/" className="flex flex-col items-center gap-0.5 text-curated-outline">
            <Sparkles className="h-5 w-5" aria-hidden />
            <span className="text-[7px] uppercase tracking-widest">Inicio</span>
          </Link>
          <span className="flex flex-col items-center gap-0.5 text-curated-outline">
            <User className="h-5 w-5" aria-hidden />
            <span className="text-[7px] uppercase tracking-widest">Cuenta</span>
          </span>
        </nav>

        <div id="tryon-widget-container" className="fixed bottom-4 right-4 z-50" />
      </div>
    </>
  );
}
