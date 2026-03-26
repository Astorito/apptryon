import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/** Sube tus archivos a public/tryon-flow/ con estos nombres (PNG o JPG: renombra y ajusta las rutas si hace falta). */
const ASSETS = {
  initial: "/tryon-flow/initial.png",
  garments: [
    "/tryon-flow/garment-1.png",
    "/tryon-flow/garment-2.png",
    "/tryon-flow/garment-3.png",
  ],
  final: "/tryon-flow/final.png",
} as const;

/** Espera tras entrar en viewport antes del primer garment. */
const SEQUENCE_START_DELAY_MS = 700;
/** Tiempo entre garment 1 → 2 → 3 (más lento). */
const GARMENT_STAGGER_MS = 520;
/** Tras el 3.er garment, antes de la imagen final. */
const FINAL_DELAY_AFTER_LAST_MS = 600;
/** Ancho base del primer garment (rem); 10 = 2× respecto al diseño anterior (5). */
const GARMENT_BASE_REM = 10;

const CARD_SHADOW =
  "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.08)";

function SparkleOverlay({ active }: { active: boolean }) {
  if (!active) return null;
  const seeds = [12, 19, 24, 31, 37, 44, 51, 58, 63, 71, 78, 85];
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
      aria-hidden
    >
      {seeds.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            width: s % 5 === 0 ? 3 : 2,
            height: s % 5 === 0 ? 3 : 2,
            left: `${(s * 7) % 88}%`,
            top: `${(s * 11 + i * 13) % 82}%`,
            boxShadow: "0 0 6px hsl(var(--primary) / 0.9)",
            animation: `tryon-sparkle-burst 0.85s ease-out ${i * 0.045}s forwards`,
          }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-0"
        style={{
          background:
            "linear-gradient(115deg, transparent 35%, hsl(var(--primary) / 0.35) 50%, transparent 65%)",
          backgroundSize: "220% 100%",
          animation: "tryon-shimmer-sweep 1.1s ease-out 0.05s forwards",
        }}
      />
    </div>
  );
}

const TryOnFlowSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.28 });
  const reduceMotion = useReducedMotion();

  const [g1, setG1] = useState(false);
  const [g2, setG2] = useState(false);
  const [g3, setG3] = useState(false);
  const [finalShow, setFinalShow] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setG1(true);
      setG2(true);
      setG3(true);
      setFinalShow(true);
      return;
    }

    const start = SEQUENCE_START_DELAY_MS;
    const t1 = window.setTimeout(() => setG1(true), start);
    const t2 = window.setTimeout(() => setG2(true), start + GARMENT_STAGGER_MS);
    const t3 = window.setTimeout(() => setG3(true), start + GARMENT_STAGGER_MS * 2);
    const t4 = window.setTimeout(
      () => setFinalShow(true),
      start + GARMENT_STAGGER_MS * 2 + FINAL_DELAY_AFTER_LAST_MS,
    );

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
    };
  }, [isInView, reduceMotion]);

  const garmentVisible = [g1, g2, g3];

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-muted/40 backdrop-blur-sm"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(0 0% 55% / 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(0 0% 55% / 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 container max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-center md:justify-between md:gap-6 lg:gap-10">
          {/* Inicial — visible al entrar en viewport */}
          <motion.div
            className="relative w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl bg-card"
            style={{ boxShadow: CARD_SHADOW }}
            initial={{ opacity: 0.85, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] w-full">
              <img
                src={ASSETS.initial}
                alt="Modelo antes del try-on"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* Garments: cada uno ~20% más ancho; solape ~20% del ancho de cada tarjeta */}
          <div className="flex w-full min-h-[280px] items-end justify-center overflow-x-auto overflow-y-visible py-4 md:min-h-[360px] md:flex-1 md:py-0">
            <div className="flex min-w-min items-end justify-center px-1">
              {ASSETS.garments.map((src, i) => {
                const baseRem = GARMENT_BASE_REM;
                const widthRem = baseRem * Math.pow(1.2, i);
                const overlapRem = i === 0 ? 0 : 0.2 * (baseRem * Math.pow(1.2, i));
                return (
                  <motion.div
                    key={src}
                    className="relative shrink-0 overflow-hidden rounded-2xl bg-white"
                    style={{
                      width: `${widthRem}rem`,
                      marginLeft: i === 0 ? 0 : `-${overlapRem}rem`,
                      zIndex: i + 1,
                      boxShadow: CARD_SHADOW,
                    }}
                    initial={false}
                    animate={{
                      opacity: garmentVisible[i] ? 1 : 0,
                      y: garmentVisible[i] ? 0 : 16,
                      scale: garmentVisible[i] ? 1 : 0.92,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                      mass: 0.85,
                    }}
                  >
                    <div
                      className="flex aspect-[4/5] w-full items-center justify-center p-2 md:p-3"
                    >
                      <img
                        src={src}
                        alt=""
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                        decoding="async"
                        aria-hidden
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Final + brillitos */}
          <motion.div
            className="relative w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl bg-card"
            style={{ boxShadow: CARD_SHADOW }}
            initial={false}
            animate={
              finalShow
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.96, y: 12 }
            }
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
          >
            <div className="relative aspect-[3/4] w-full">
              <img
                src={ASSETS.final}
                alt="Modelo con el look completo"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <SparkleOverlay active={finalShow && !reduceMotion} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TryOnFlowSection;
