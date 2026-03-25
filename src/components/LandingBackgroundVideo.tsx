/**
 * Video de fondo de toda la landing (detrás de todo el contenido).
 * Archivo: public/landing-bg.mp4 — sin sonido, loop, autoplay.
 */
const BG_VIDEO_SRC = "/landing-bg.mp4";

const LandingBackgroundVideo = () => {
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
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default LandingBackgroundVideo;
