import React from 'react'

export default function HeroImg({src} : { src : string}) {
  return (
    <div className='lg:absolute lg:right-5 mt-5 lg:mt-5 rounded-xl w-full lg:w-1/2 overflow-hidden h-50 flex items-center justify-center'>
        <div style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
        }} className='aspect-video saturate-120 lg:h-[250px] w-full h-full bg-zinc-200 text-zinc-500 object-center object-cover'>
            {src ? "" : (<span className='text-lg'>Hero Image Placeholder</span>)}
        </div>
    </div>
  )
}
