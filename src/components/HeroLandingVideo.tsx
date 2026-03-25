import { useEffect, useRef, useState } from "react";

/** Coloca tu archivo en public/hero-landing.mp4 */
const VIDEO_SRC = "/hero-landing.mp4";

const PLAY_DELAY_MS = 2000;

const HeroLandingVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startTimer = window.setTimeout(() => {
      video.play().catch(() => {
        // Autoplay puede fallar sin interacción; muted lo evita en la mayoría de navegadores
      });
    }, PLAY_DELAY_MS);

    return () => window.clearTimeout(startTimer);
  }, []);

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    // Fija el último frame (en algunos navegadores ayuda evitar pantalla negra al terminar)
    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.currentTime = Math.max(0, video.duration - 0.05);
    }
    setHasEnded(true);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl
                 h-[min(75vh,640px)] sm:h-[min(82vh,720px)] lg:h-[calc(100dvh-7rem)] lg:min-h-[520px]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        loop={false}
        onEnded={handleEnded}
        aria-label="Video de presentación Try Look"
      />
      {!hasEnded && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"
          aria-hidden
        />
      )}
    </div>
  );
};

export default HeroLandingVideo;
