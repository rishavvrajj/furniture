import { Facebook, Instagram, Linkedin, Twitch, Twitter, Youtube } from 'lucide-react';
import SocialIcon from './SocialIcon';
import React from 'react'
const MARQUEE_COPIES = 100;

export default function Footer() {
  return (
    <footer className='bg-zinc-900 text-white'>
      <div className='mx-0 lg:mx-10 mt-10 md:mt-12 lg:mt-15 py-6 lg:py-7 px-3 lg:px-8 md:mx-10 my-2 md:my-2'>

        {/* Upper Area Large Text */}
        <div className='relative overflow-hidden h-40 md:h-60 lg:h-90 flex items-center justify-center'>
          {/* Marque Copy Dynamic Generated  */}
          <div className='flex min-w-full whitespace-nowrap animate-marquee '>
            {Array.from({ length: MARQUEE_COPIES }).map((_, index) => (
              <p key={index} aria-hidden={index !== 0 ? "true" : "false"} className='text-9xl lg:text-[250px] impact font-extrabold leading-none opacity-90 lg:opacity-95 pr-20'>
                FURNISHINGS
              </p>
            ))}
          </div>
          <img
            src="/images/sofa.png"
            alt="sofa-image"
            className='bottom-0 left-1/2 -translate-x-1/2 w-[150px] md:w-[200px] lg:w-[400px] absolute animate-wiggle ease-in-out cursor-pointer'
          />
        </div>

        {/* Bottom Area Copyright & Social Icons */}
        <div className='border-t border-zinc-800 py-6 lg:py-10'>
          <div className='mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm'>
            <p className='text-zinc-400'>
              <strong>Furniture.</strong> All right reserved
            </p>
            <div className='flex space-x-3'>
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Youtube} />
            </div>
            <div>
              <p className='text-zinc-400'>Design By <strong>Sahil Dobariya</strong></p>
              <p className='text-zinc-400'>Build By <strong>Rishav Raj</strong></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
