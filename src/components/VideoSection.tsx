const VideoSection = () => {
  return (
    <section className="section-padding">
      <div className="container flex justify-center">
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
          <wistia-player
            media-id="vnsn6vyzy5"
            aspect="1.7777777777777777"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;