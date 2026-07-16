import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <hr className='text-zinc-300 -mt-0' />
      
      <main>
        <Hero />
      </main>

      {/* <Footer /> */}
    </div>
  )
}
