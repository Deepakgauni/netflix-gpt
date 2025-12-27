import React from 'react'
import { useSelector } from "react-redux";
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
     const {movieResults, movieNames} = useSelector(store => store.gpt)
     if(!movieNames) return null
    
  return (
    <div className='m-4 p-4 bg-black text-white bg-opacity-90'>
   <div>
   {movieNames.map((movieNames, index)=>( 
    
    <MovieList key={movieNames} title = {movieNames} movies={movieResults[index]} />
   
   
   ))}
  
   </div>
    </div>
  )
}

export default GptMovieSuggestion
