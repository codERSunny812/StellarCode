/* eslint-disable react/prop-types */

const YoutubeEmbed = ({ videoId }) => {
  //   console.log(videoId);
  return (
    <div className="video-responsive">
      <iframe
        width="600"
        height="300"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
