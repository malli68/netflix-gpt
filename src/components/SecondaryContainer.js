import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movie = useSelector((store)=> store.movies)

  return (
    <div className='bg-black'>
        <div className='-mt-52 pl-12 relative z-20'>
        <MoviesList title={"Now playing"} movie={movie.nowPlayingMovies}/>
        <MoviesList title={"Top Rated"} movie={movie.topRatedMovies}/>
        <MoviesList title={"Popular"} movie={movie.popularMovies}/>
        <MoviesList title={"Upcoming"} movie={movie.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer