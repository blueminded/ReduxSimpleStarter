import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="">Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className=" embed-responsive-16y9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div className="">{video.snippet.title}</div>
        <div className="">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
