/**
 * Video de fondo de toda la landing (detrás de todo el contenido).
 * Archivo: public/landing-bg.mp4 — sin sonido, autoplay, sin loop; al terminar queda fijo en el último frame.
 */
const BG_VIDEO_SRC = "/landing-bg.mp4";

type Props = {
  onVideoEnded?: () => void;
};

const LandingBackgroundVideo = ({ onVideoEnded }: Props) => {
  const handleEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    v.pause();
    const d = v.duration;
    if (Number.isFinite(d) && d > 0) {
      v.currentTime = Math.max(0, d - 0.05);
    }
    onVideoEnded?.();
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <video
        className="absolute left-1/2 top-1/2 h-full min-h-full w-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        src={BG_VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded}
        aria-label=""
      />
    </div>
  );
};

export default LandingBackgroundVideo;
