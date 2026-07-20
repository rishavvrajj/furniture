import React, { useEffect, useRef } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Trending from './components/Trending'
import NewArrival from './components/NewArrival'
import ShopByRoom from './components/ShopByRoom'
import GetInspired from './components/GetInspired'
import Footer from './components/Footer'

import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function App() {

  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother,useGSAP)

    const smoother = ScrollSmoother.create({
      content: contentRef.current,
      smooth: 1.8,
      effects: true,
    })

    return () => {
      smoother && smoother.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />

      <hr className='text-zinc-300 -mt-0' />
      
      <main id='smooth-content' ref={contentRef}>
        <Hero />
      <hr className='text-zinc-300 -mt-0'/>
        <Trending />
      <hr className='text-zinc-300 -mt-0'/>
        <NewArrival />
      <hr className='text-zinc-300 -mt-0'/>
        <ShopByRoom />
      <hr className='text-zinc-300 -mt-0'/>
        <GetInspired />
      <hr className='text-zinc-300 -mt-0'/>
        <Footer />
      <div className='w-full '></div>
      </main>

    </div>
  )
}