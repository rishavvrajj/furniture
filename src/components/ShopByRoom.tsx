import React, { useState } from 'react'

import RoomLink from './RoomLink'
import DynamicImage from './DynamicImage';

import { roomDetails } from '../assets/data'

export default function ShopByRoom() {

  const initialImageSrc = roomDetails[0]?.src || "";

  const [currentImageSrc, setCurrentImageSrc] = useState<string>(initialImageSrc);

  const handleMouseEnter = (src: string) => {
    setCurrentImageSrc(src)
  }

  const handleMouseExit = () => {
    setCurrentImageSrc(initialImageSrc)
  }
  return (
    <section className='mx-0 lg:mx-10 py-6 lg:py-7 px-3 lg:px-8 md:mx-10 my-2 md:my-2'>

        <h2 className='heading-2 impact'>BEST SHOP BY <br /> ROOM</h2>

        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <div className='lg:w-1/3'>
            {roomDetails.map((room) => (
              <RoomLink key={room.name} onMouseEnter={() => handleMouseEnter(room.src)} onMouseExit={() => handleMouseExit()}>
                {room.name} 
              </RoomLink>
            ))}
          </div>
          <DynamicImage src={currentImageSrc} />
        </div>
    </section>
  )
}
