import React, { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieVideo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      const filterData = data?.results?.filter(
        (video) => video.type === "Trailer"
      );
      const trailer =filterData && filterData.length ? filterData[0] : data?.results[0];
      dispatch(addTrailerVideo(trailer));
    };

    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
