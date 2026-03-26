import { motion } from "framer-motion";

/**
 * Imágenes en public/garments/
 *   garment-1.png  garment-2.png  garment-3.png
 *
 * Posición: absolute dentro del Hero (scroll con la primera sección, no fixed al viewport).
 */
const GARMENT_IMAGES = [
  "/garments/garment-1.png",
  "/garments/garment-2.png",
  "/garments/garment-3.png",
] as const;

const CARD_SHADOW =
  "0 20px 50px rgba(0,0,0,0.16), 0 8px 24px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)";

type Props = {
  visible: boolean;
};

const LandingGarmentBoxes = ({ visible }: Props) => {
  if (!visible) return null;

  return (
    <div
      className="pointer-events-none absolute top-1/2 z-[15] hidden -translate-y-1/2 flex-col items-end gap-4 md:flex"
      style={{
        right: "clamp(6rem, min(36vw, 28rem), 40vw)",
      }}
      aria-hidden
    >
      {GARMENT_IMAGES.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, x: 28, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.1 + index * 0.22,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border-0 bg-white/90 shadow-none backdrop-blur-md sm:h-[136px] sm:w-[136px] md:h-[154px] md:w-[154px]"
          style={{ boxShadow: CARD_SHADOW }}
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
