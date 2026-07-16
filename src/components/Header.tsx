import React from 'react'
import NavBtn from './NavBtn'
import { Phone, Menu } from 'lucide-react'


const NavItem = [
    {label:"Home", href:"/"},
    {label:"About", href:"/"},
    {label:"Works", href:"/"},
    {label:"Gallery", href:"/"},
    {label:"Service", href:"/"},
]

function Header() {
  return (
    <header className='z-1 fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg min-w-full'>
        <div className='flex items-center justify-between mx-3 md:mx-10 lg:mx-20 my-2 md:my-2'>
            <a href="#"><div className='impact cursor-pointer text-3xl uppercase tracking-tight relative text-zinc-900'>Furniture<sup className='text-xs font-thin absolute'>TM</sup></div></a>
            <nav className='hidden lg:flex items-center space-x-5'>
                {NavItem.map((items) => (
                    <NavBtn key={items.label} active={false}>{items.label}</NavBtn>
                ))}
                <button className='flex items-center space-x-2 bg-zinc-900 text-white text-sm m-2 py-2 px-4 rounded-full cursor-pointer transition-all duration-150 ease-in hover:bg-transparent border border-zinc-900 hover:text-zinc-900'>
                    <Phone size={16}/>
                    <span>Contact Us</span>
                </button>
            </nav>
            <div className='lg:hidden'>
                <Menu className='size-10 text-zinc-900'/>
            </div>
        </div>
    </header>
  )
}

export default Header