import React from 'react'

const VideoTitle = ( {title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-9 md:px-24 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
<div className="my-4 md:m-0">
    <button className='bg-white bg-opacity-90 hover:bg-opacity-75 text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg'>
  Play
</button>
    <button className='bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg mx-2'>More Info</button>
</div>

    </div>
  )
}

export default VideoTitle
