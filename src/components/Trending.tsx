import React from 'react'
import ProductCard from './ProductCard'

export default function Trending() {
  return (
    <section className='mx-0 lg:mx-10 py-6 lg:py-7 px-3 lg:px-8 md:mx-10 my-2 md:my-2'>
        {/* Title */}
        <div className='relative flex justify-between items-end mb-12'>
            <h2 className='text-6xl lg:text-9xl impact uppercase text-nowrap leading-tighter'>For Trending <br /> Now</h2>
            <button className='text-sm lg:text-lg absolute right-0 lg:right-5 font-medium border border-zinc-900 text-zinc-900 px-5 lg:px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 ease-in-out'>See All</button>
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Item-1 */}
            <div className="col-span-3 lg:col-span-1">
                <ProductCard price='550' position='bottom-4 left-5' src='./images/bg1.avif'/>
            </div>

            {/* Item-2 */}
            <div className="col-span-3 lg:col-span-1">
                <ProductCard price='1000' position='bottom-4 left-5' src='./images/bg2.avif'/>
            </div>

            {/* Item-3 */}
            <div className="col-span-3 lg:col-span-1">
                <ProductCard price='260' position='bottom-4 left-5' src='./images/bg3.avif'/>
            </div>

            <div className='flex flex-col lg:flex-row col-span-3 justify-between lg:items-center'>
                <h3 className='text-3xl font-extrabold uppercase mb-2'>
                    CUTTING-EDGE <br /> FURNITURE TRENDS
                </h3>
                <p className='text-base text-zinc-600 max-w-lg right-0'>
                    Choosing the right furniture for the home online will add elegance 
                    and functionality to your space with comfort and elegance.
                </p>
            </div>
        </div>
    </section>
  )
}
