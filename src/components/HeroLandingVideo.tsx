import { useEffect, useRef, useState } from "react";

/** Coloca tu archivo en public/hero-landing.mp4 */
const VIDEO_SRC = "/hero-landing.mp4";

/** Pantalla blanca antes de reproducir (ms) */
const INTRO_WHITE_MS = 3000;

const HeroLandingVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showIntroWhite, setShowIntroWhite] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startTimer = window.setTimeout(() => {
      setShowIntroWhite(false);
      video.play().catch(() => {
        setShowIntroWhite(false);
      });
    }, INTRO_WHITE_MS);

    return () => window.clearTimeout(startTimer);
  }, []);

  /** Al terminar: pausa y deja fijo el último frame (sin loop, sin volver al inicio). */
  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    const d = video.duration;
    if (Number.isFinite(d) && d > 0) {
      // Unos ms antes del final = último frame decodificado (evita negro en algunos navegadores)
      video.currentTime = Math.max(0, d - 0.05);
    }
  };

  return (
    <div
      className="relative h-full w-full min-h-[min(68vh,480px)] overflow-hidden bg-background lg:min-h-[calc(100dvh-4rem)]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain object-center"
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        loop={false}
        controls={false}
        onEnded={handleEnded}
        aria-label="Video de presentación Try Look"
      />
      {/* Intro: 3 s blanco; el video carga debajo pero no se ve hasta quitar el overlay */}
      {showIntroWhite && (
        <div
          className="absolute inset-0 z-20 bg-white"
          aria-hidden
        />
      )}
    </div>
  );
};

export default HeroLandingVideo;
