import { useState, useRef, useCallback } from "react";
import modelGray from "@/assets/landing-modelo-gray.png";
import modelBeige from "@/assets/landing-modelo-beige.png";
import zapatillas from "@/assets/zapatillas.png";
import camiseta from "@/assets/camiseta.png";
import pantalon from "@/assets/pantalon.png";
import campera from "@/assets/campera.png";
import { CheckCircle } from "lucide-react";

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) updatePosition(e.touches[0].clientX);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">

      {/* ── Static garment thumbnails (no animation, just shadow) ── */}
      {/* Top-left: Campera */}
      <img
        src={campera}
        alt="Jacket"
        className="absolute -left-28 top-6 w-32 h-32 object-contain rounded-2xl shadow-xl bg-white z-10 hidden lg:block"
      />
      {/* Top-right: Camiseta */}
      <img
        src={camiseta}
        alt="T-shirt"
        className="absolute -right-28 top-6 w-32 h-32 object-contain rounded-2xl shadow-xl bg-white z-10 hidden lg:block"
      />
      {/* Bottom-left: Pantalon */}
      <img
        src={pantalon}
        alt="Pants"
        className="absolute -left-28 bottom-24 w-32 h-32 object-contain rounded-2xl shadow-xl bg-white z-10 hidden lg:block"
      />
      {/* Bottom-right: Zapatillas */}
      <img
        src={zapatillas}
        alt="Sneakers"
        className="absolute -right-28 bottom-24 w-32 h-32 object-contain rounded-2xl shadow-xl bg-white z-10 hidden lg:block"
      />

      {/* ── Main slider container ── */}
      <div
        ref={containerRef}
        className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* AFTER — model with beige outfit, full width underneath */}
        <img
          src={modelBeige}
          alt="After - With outfit"
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
        />

        {/* BEFORE — base/gray model, clipped via clip-path (no image distortion) */}
        <img
          src={modelGray}
          alt="Before - Base"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          draggable={false}
        />

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/90 z-20 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        />

        {/* Circular drag handle */}
        <div
          className="absolute top-1/2 z-30 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/30">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Instant Fit Verified badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <div className="flex items-center gap-2 bg-foreground text-background rounded-full px-4 py-2 shadow-lg whitespace-nowrap">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs font-inter font-semibold tracking-wide">Instant Fit Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;