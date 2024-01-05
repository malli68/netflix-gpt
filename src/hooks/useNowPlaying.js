import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlaying } from "../utils/moviesSlice";

const useNowPlaying=()=>{
    const dispatch=useDispatch();
    const [moviesList, setMoviesList] = useState([]);
    useEffect(()=>{
      const getNowPlaying = async()=>{
        let data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, API_OPTIONS);
        let response = await data.json()
        dispatch(addNowPlaying(response.results))
      };
      getNowPlaying()
    },[])
    
}
export default useNowPlaying;