const VideoSection = () => {
  return (
    <section className="section-padding">
      <div className="container flex justify-center">
        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube-nocookie.com/embed/WrCrLKpvuqs?rel=0"
            title="TryOn Demo Video"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
