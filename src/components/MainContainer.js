import React from 'react'
import { VideoTitle } from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const FirstMovie = movies[0]
    const {original_title, overview, id} = FirstMovie;
  return (
    <div>
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer