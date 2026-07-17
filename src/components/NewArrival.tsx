import React from 'react'
import BigImage from './BigImage'
import SmallImage from './SmallImage'

export default function NewArrival() {
  return (
    <section className='mx-0 lg:mx-10 py-6 lg:py-7 px-3 lg:px-8 md:mx-10 my-2 md:my-2'>
        
        {/* Title */}
        <h2 className='text-6xl lg:text-9xl impact uppercase leading-tight'>NEW ARRIVAL</h2>

        {/* Content */}
        <div className='grid lg:grid-cols-4 gap-8'>
            {/* Featured large image */}
            <div className='lg:col-span-2'>
                <div className="flex flex-col-reverse card-hover">
                    {/* Image placeholder */}
                    <BigImage src='./images/img1.avif' />
                    {/* Text Content */}
                    <div className="mt-6 md:mt-0 pt-4 flex justify-between">
                        <div>
                            <p className="text-lg uppercase font-bold text-zinc-600">
                                The Finest Collection
                            </p>
                            <h3 className="text-lg font-bold mb-4">
                                Options,Starting 
                            </h3>
                        </div>
                        <div>
                            <p className="text-xl font-extrabold mb-1 text-right">
                                $1000
                            </p>
                            <p className="text-sm text-zinc-500">
                                10+ Variants
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured small image */}
            <div className="lg:col-span-2 flex flex-col lg:flex-row space-y-6 lg:gap-10">
                <div className="flex flex-col lg:w-1/2 card-hover">
                    {/* Image Placeholder */}
                    <SmallImage src='./images/img2.avif'/>
                    {/* Text Details */}
                    <div className="w-full flex justify-between pt-2">
                        <div>
                            <h4 className="text-xl uppercase font-bold">Coffe Table</h4>
                            <p className="text-base text-zinc-600 mb-1">Starting</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-right">$350</p> 
                            <p className="text-base text-zinc-500">20+ Variants</p>   
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col lg:mt-50 lg:w-1/2 card-hover">
                    {/* Image Placeholder */}
                    <SmallImage src='./images/img3.avif'/>
                    {/* Text Details */}
                    <div className="w-full flex justify-between pt-2">
                        <div>
                            <h4 className="text-xl uppercase font-bold">Valvet Chair</h4>
                            <p className="text-base text-zinc-600 mb-1">Starting</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-right">$420</p> 
                            <p className="text-base text-zinc-500">20+ Variants</p>   
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-15">
            <button className='text-base lg:text-lg font-medium border border-zinc-900 text-zinc-900 px-6 lg:px-8 py-3 hover:text-zinc-600 hover:border-zinc-600 transition-all ease-in duration-200 hover:animate-wiggle'>Explore</button>
        </div>
    </section>
  )
}
