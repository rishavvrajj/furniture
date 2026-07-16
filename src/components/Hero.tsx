import React from 'react'
import { ArrowRight } from 'lucide-react'
import HeroImg from './HeroImg'

export default function Hero() {
  return (
    <section className='mx-0 lg:mx-10 mt-10 md:mt-12 lg:mt-15 py-6 lg:py-7 px-3 lg:px-8 md:mx-10 my-2 md:my-2'>
        <div className='flex flex-col relative lg:flex-row lg:space-x-12'>

            {/* Left content  */}
            <div className='lg:w-full'>

                {/* Main Title: Large Bold */}
                <h1 className='text-7xl uppercase sm:text-8xl font-extrabold leading-none -ml-0.5'>
                    <span className='block impact text-9xl lg:text-[250px] tracking-widest'>Fine</span>
                    <span className='block impact text-6xl lg:text-[200px] tracking-widest pl-0.5'>Furniture</span>
                </h1>

                {/* SubText  */}
                <div className='text-xs lg:text-lg text-zinc-900 line-clamp-4 lg:line-clamp-none overflow-scroll lg:w-full py-2'>
                    Choosing the right furniture for your home online will and elegence and funcionality to your space.<br className="hidden lg:block" /> We offer a curated collection of fine furnishing.
                </div>

                {/* CTA Button */}
                <button className='group flex items-center space-x-3 bg-zinc-900 text-white text-sm font-semibold py-2 px-3 mt-2 lg:mt-0 rounded-md transition-all duration-150 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:absolute lg:text-lg hover:animate-wiggle'>
                    <span>Shop Now</span>
                    <ArrowRight size={20} className='group-hover:rotate-360 -rotate-35 transition-all duration-500 ease-in'/>
                </button>

            </div>

            {/* Right Content */}
            <div className=''>
                <HeroImg src='./public/images/backgroundImg.jpg' />
            </div>
            
        </div>
    </section>
  )
}
