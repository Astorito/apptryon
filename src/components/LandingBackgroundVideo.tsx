/**
 * Video de fondo de toda la landing (detrás de todo el contenido).
 * Archivo: public/landing-bg.mp4 — sin sonido, autoplay, sin loop; al terminar queda fijo en el último frame.
 *
 * Autoplay fiable: play() explícito, reintentos en canplay/visibility, primer pointer para políticas estrictas.
 */
import { useCallback, useEffect, useRef } from "react";

const BG_VIDEO_SRC = "/landing-bg.mp4";

type Props = {
  onVideoEnded?: () => void;
};

const LandingBackgroundVideo = ({ onVideoEnded }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const endedRef = useRef(false);

  const handleEnded = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const v = e.currentTarget;
      endedRef.current = true;
      v.pause();
      const d = v.duration;
      if (Number.isFinite(d) && d > 0) {
        v.currentTime = Math.max(0, d - 0.05);
      }
      onVideoEnded?.();
    },
    [onVideoEnded],
  );

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      if (endedRef.current) return;
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      const p = v.play();
      if (p !== undefined) {
        void p.catch(() => {
          /* Autoplay bloqueado hasta interacción o más datos; se reintenta con otros listeners */
        });
      }
    };

    // Si ya hay datos al montar
    if (v.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
    }

    const onReady = () => tryPlay();
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("canplay", onReady);

    const onVis = () => {
      if (!document.hidden && !endedRef.current) tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    // Muchos móviles bloquean autoplay hasta un gesto; un solo intento tras primer pointer
    const unlockOnce = () => {
      if (!endedRef.current) tryPlay();
    };
    window.addEventListener("pointerdown", unlockOnce, { once: true, passive: true });

    // Reanudar si el buffer se quedó colgado
    const onStalled = () => {
      if (!endedRef.current) tryPlay();
    };
    v.addEventListener("stalled", onStalled);

    return () => {
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("canplay", onReady);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointerdown", unlockOnce);
      v.removeEventListener("stalled", onStalled);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <video
        ref={videoRef}
        className="absolute left-1/2 top-1/2 h-full min-h-full w-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        src={BG_VIDEO_SRC}
        autoPlay
        muted
        defaultMuted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        aria-label=""
      />
    </div>
  );
};

export default LandingBackgroundVideo;
