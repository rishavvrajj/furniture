import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Trending from './components/Trending'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <hr className='text-zinc-300 -mt-0' />
      
      <main>
        <Hero />
      <hr className='text-zinc-300 -mt-0' />
        <Trending />
      </main>

      {/* <Footer /> */}
    </div>
  )
}