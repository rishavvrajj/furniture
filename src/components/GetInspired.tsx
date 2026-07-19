import React from 'react'
import { inspirationProducts } from '../assets/data'
import InspiredCard from './InspiredCard'

export default function GetInspired() {
  return (
    <section className='relative mx-0 lg:mx-10 py-6 lg:py-7 px-3 lg:px-8 md:mx-10 my-2 md:my-2'>
      <h2 className='heading-2 impact'> 
        GET INSPIRED
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
        {inspirationProducts.map((product, index) => (
          <InspiredCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}
