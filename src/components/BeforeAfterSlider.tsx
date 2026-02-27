import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import modelGray from "@/assets/landing-modelo-gray.png";
import modelBeige from "@/assets/landing-modelo-beige.png";
import zapatillas from "@/assets/zapatillas.png";
import camiseta from "@/assets/camiseta.png";
import pantalon from "@/assets/pantalon.png";
import campera from "@/assets/campera.png";

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

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Floating clothing items */}
      <motion.img
        src={campera}
        alt="Jacket"
        className="absolute -left-16 top-4 w-24 h-24 object-contain rounded-xl shadow-lg bg-background z-10 hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.img
        src={camiseta}
        alt="T-shirt"
        className="absolute -right-16 top-4 w-24 h-24 object-contain rounded-xl shadow-lg bg-background z-10 hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.img
        src={pantalon}
        alt="Pants"
        className="absolute -left-16 bottom-24 w-24 h-24 object-contain rounded-xl shadow-lg bg-background z-10 hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
      />
      <motion.img
        src={zapatillas}
        alt="Sneakers"
        className="absolute -right-16 bottom-24 w-24 h-24 object-contain rounded-xl shadow-lg bg-background z-10 hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After image (full) */}
        <img
          src={modelBeige}
          alt="After - Virtual Try-On"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={modelGray}
            alt="Before - Original"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current?.offsetWidth || "100%" }}
            draggable={false}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-background/80 z-20"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-lg flex items-center justify-center border-2 border-primary/40">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground">
              <path d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
