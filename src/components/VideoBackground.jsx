import React from 'react'
import { API_OPTIONS} from '../utils/constants'
import { useEffect } from 'react';

const VideoBackground = ({movieId})=> {

const getMovieVideos = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/507244/videos?language=en-US', API_OPTIONS)
    const json = await data.json();
    console.log(json)

    const filterData = json.results.filter((video)=> video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0]; 
    console.log(trailer);
};
 useEffect(()=>{
    getMovieVideos();
 },[])

    return (
        <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/M7QhCm98eIQ?si=mcPoPMQe60ySOx0X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
    
}

export default VideoBackground;
