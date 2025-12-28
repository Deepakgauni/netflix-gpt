import openai from "../utils/openai";
import React, { useRef } from 'react'
import lang from "../utils/languageConstants";
import { useSelector } from 'react-redux';
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMoviesResults } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch= useDispatch();
  const langKey= useSelector((store)=>store.config.lang);
  const SearchText= useRef(null)


  const searchMovieTMDB = async (movie)=>{
   const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
   const json =  await data.json()

   return json.results;
  }

  const handleGptSearchClick = async()=>{
     console.log(SearchText.current.value);

     const gptQuery = "Recommend me some movies or Tv shows to watch about " + SearchText.current.value + ". only give me names of 5 movies, comma separated like the example results : gadar, sholay, lagaan, 3 idiots, dhoom";
     
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-4o",
    });

    if(!gptResults.choices){
      // Todo: write error handling code here
    }
    console.log(gptResults.choices[0]?.message?.content);
   const gptMovies = gptResults.choices[0]?.message?.content.split(",")
    
   const promiseArray = gptMovies.map(movie=> searchMovieTMDB(movie))

    const tmdbResults= await Promise.all(promiseArray)

    console.log(tmdbResults)

    dispatch(addGptMoviesResults({movieNames: gptMovies, movieResults:tmdbResults}))


  }

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()} >
      <input ref={SearchText}type='text' placeholder={lang[langKey].gptSearchPlaceholder} className='p-4 m-4 bg-white col-span-9' />
      <button className=' col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'
     onClick={handleGptSearchClick} >
     {lang[langKey].search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar
