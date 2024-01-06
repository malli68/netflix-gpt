import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlaying, addPopular } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPopular = async () => {
      let data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        API_OPTIONS
      );
      let response = await data.json();
      dispatch(addPopular(response.results));
    };
    getPopular();
  }, []);
};
export default usePopularMovies;
