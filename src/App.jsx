import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Trending from './components/Trending'
import NewArrival from './components/NewArrival'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <hr className='text-zinc-300 -mt-0' />
      
      <main>
        <Hero />
      <hr className='text-zinc-300 -mt-0'/>
        <Trending />
      <hr className='text-zinc-300 -mt-0'/>
        <NewArrival />
      </main>

      {/* <Footer /> */}
    </div>
  )
}