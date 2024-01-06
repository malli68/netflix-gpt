import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title, movie}) => {
  return movie && (
    <div className='px-6  '>
                    <h1 className='text-4xl py-4 text-white'>{title}</h1>
        <div  className='flex overflow-x-scroll'>

        <div className='flex '>
            {movie && movie.map((m)=>{
                return <MovieCard key={m.id} posterPath={m.poster_path}/>
            })}
                </div>
        </div>
    </div>
  )
}

export default MoviesList