

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopular, addUpcoming } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUpcoming = async () => {
      let data = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
        API_OPTIONS
      );
      let response = await data.json();
      dispatch(addUpcoming(response.results));
    };
    getUpcoming();
  }, []);
};
export default useUpComingMovies;
