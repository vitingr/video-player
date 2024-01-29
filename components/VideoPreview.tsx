import { VideoProps } from '@/types'
import React from 'react'

const VideoPreview = ({content}: {content: VideoProps}) => {
  return (
    <div className='w-full flex justify-between gap-6 transition-all duration-300 p-4 rounded-xl hover:bg-zinc-100 cursor-pointer'>
      <img src={content.thumbnail} alt='Video Preview Image' className='selection:bg-transparent w-[250px] h-[150px] rounded-lg' />
      <div>
        <h1 className='font-bold'>{content.title}</h1>
        <h2 className='text-xs text-[#131212]'>{content.views}</h2>
        <div className='flex gap-2 text-sm items-center mt-4'>
          <img src={content.channelLogo} alt="Channel Logo" className='rounded-full w-[20px] h-[20px]' />
          <span className='text-xs'>{content.channelName}</span>
        </div>
        <p className='mt-4 text-xs text-justify overflow-hidden'>{content.desc}</p>
      </div>
    </div>
  )
}

export default VideoPreview