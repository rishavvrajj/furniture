import React from 'react'

export default function InspiredCard({name, src} : {name: string, src : string}) {
  return (
    <div className=''>
        <div 
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className={`w-full h-[450px] saturate-130 lg:h-[600px] ${!src && 'bg-zinc-300'} flex items-center justify-center text-zinc-600 hover:scale-105 transition-all duration-600 ease-in-out cursor-pointer`}
        >
            {!src && "Image Placeholder"}     
        </div>
        <p className='text-xl lg:text-2xl text-center font-semibold mt-2 mb-2 p-2'>
            {name}
        </p>       
    </div>
  )
}
