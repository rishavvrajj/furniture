import React from 'react'

type NavBtnProps = {
    children: React.ReactNode;
    active: boolean;
}

export default function NavBtn({children, active=false}: NavBtnProps) {
  return (
    <a href='#' className={`text-sm hover:font-bold transition-all duration-150 ease-in hover:-translate-y-1 hover:border-zinc-400 uppercase tracking-wider border py-1 px-2 rounded-full hover:text-zinc-900 ${active ? "border-zinc-400 font-bold text-zinc-400":"border-transparent text-zinc-600"}`}>
        {children}
    </a>
  )
}
