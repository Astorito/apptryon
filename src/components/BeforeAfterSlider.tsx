import { useState, useRef, useCallback } from "react";
import modelGray from "@/assets/landing-modelo-gray.png";
import modelBeige from "@/assets/landing-modelo-beige.png";
import zapatillas from "@/assets/zapatillas.png";
import camiseta from "@/assets/camiseta.png";
import pantalon from "@/assets/pantalon.png";
import campera from "@/assets/campera.png";
import widgetIcon from "@/assets/Widget.png";
import { CheckCircle } from "lucide-react";

const GARMENT_SHADOW = "0 8px 28px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)";
const SLIDER_SHADOW  = "0 20px 60px rgba(0,0,0,0.22), 0 6px 20px rgba(0,0,0,0.12)";

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

  const handleMouseDown = (e: React.MouseEvent) => { isDragging.current = true; updatePosition(e.clientX); };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updatePosition(e.clientX); };
  const handleTouchStart = (e: React.TouchEvent) => { isDragging.current = true; updatePosition(e.touches[0].clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { if (isDragging.current) updatePosition(e.touches[0].clientX); };

  const garmentStyle = (pos: React.CSSProperties): React.CSSProperties => ({
    width: 154,
    height: 154,
    boxShadow: GARMENT_SHADOW,
    borderRadius: 16,
    backgroundColor: "#fff",
    objectFit: "contain" as const,
    position: "absolute",
    zIndex: 20,
    ...pos,
  });

  return (
    <div className="relative w-full max-w-[410px] mx-auto">

      {/* Garments with stronger shadow */}
      <img src={campera}    alt="Jacket"   className="hidden lg:block" style={garmentStyle({ top: 24,  left: -116 })} />
      <img src={camiseta}   alt="T-shirt"  className="hidden lg:block" style={garmentStyle({ top: 24,  right: -116 })} />
      <img src={pantalon}   alt="Pants"    className="hidden lg:block" style={garmentStyle({ bottom: 96, left: -116 })} />
      <img src={zapatillas} alt="Sneakers" className="hidden lg:block" style={garmentStyle({ bottom: 96, right: -116 })} />

      {/* Slider container with deep shadow */}
      <div
        ref={containerRef}
        className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden cursor-col-resize select-none z-10"
        style={{ boxShadow: SLIDER_SHADOW }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* AFTER — beige outfit */}
        <img src={modelBeige} alt="After" className="absolute inset-0 w-full h-full object-cover object-top" draggable={false} />

        {/* BEFORE — gray base, clipped */}
        <img
          src={modelGray} alt="Before"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          draggable={false}
        />

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/90 z-20 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 z-30 pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/30">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Instant Fit Verified badge */}
        <div
          className="absolute bottom-4 z-30 pointer-events-none"
          style={{ left: "50%", transform: "translateX(calc(-50% - 22px))" }}
        >
          <div className="flex items-center gap-2 bg-foreground text-background rounded-full px-4 py-2 shadow-lg whitespace-nowrap">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs font-inter font-semibold tracking-wide">Instant Fit Verified</span>
          </div>
        </div>

        {/* Widget icon — bottom right */}

{/* Widget icon — bottom right */}
<div className="absolute bottom-1 right-1 z-30 pointer-events-none">
  <img 
    src={widgetIcon} 
    alt="Widget" 
    className="w-28 h-28 object-contain drop-shadow-2xl"
  />
</div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;