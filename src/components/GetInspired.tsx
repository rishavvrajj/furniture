import React from 'react'
import { inspirationProducts } from '../assets/data'
import InspiredCard from './InspiredCard'

export default function GetInspired() {
  return (
    <section className='relative mx-auto p-4 sm:p-8 mt-20 mb-20'>
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
