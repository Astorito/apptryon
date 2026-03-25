const VideoSection = () => {
  return (
    <section className="section-padding bg-background/55 backdrop-blur-sm">
      <div className="container flex justify-center">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
          <div
            dangerouslySetInnerHTML={{
              __html: `<wistia-player media-id="vnsn6vyzy5" aspect="1.7777777777777777"></wistia-player>`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;