import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  const videoKey = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieID);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + videoKey?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        auto
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
