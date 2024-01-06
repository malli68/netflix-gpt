import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTopRated = async () => {
      let data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        API_OPTIONS
      );
      let response = await data.json();
      dispatch(addTopRated(response.results));
    };
    getTopRated();
  }, []);
};
export default useTopRatedMovies;
