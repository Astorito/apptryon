import { motion } from "framer-motion";

/**
 * Imágenes en public/garments/ (PNG o JPG recomendado, ~cuadrado):
 *   garment-1.png  garment-2.png  garment-3.png
 */
const GARMENT_IMAGES = [
  "/garments/garment-1.png",
  "/garments/garment-2.png",
  "/garments/garment-3.png",
] as const;

const BOX_SHADOW = "0 8px 28px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)";

type Props = {
  visible: boolean;
};

const LandingGarmentBoxes = ({ visible }: Props) => {
  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed left-4 top-1/2 z-[5] hidden -translate-y-1/2 flex-col gap-4 md:left-8 md:flex"
      aria-hidden
    >
      {GARMENT_IMAGES.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, x: -36, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.1 + index * 0.22,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-foreground/85 bg-white/75 shadow-lg backdrop-blur-sm sm:h-[136px] sm:w-[136px] md:h-[154px] md:w-[154px]"
          style={{ boxShadow: BOX_SHADOW }}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-contain p-2"
            loading="lazy"
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default LandingGarmentBoxes;
