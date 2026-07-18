import { ArrowRight } from "lucide-react";

import React from 'react'

export default function RoomLink({
    children, onMouseEnter, onMouseExit
} : {
    children : String,
    onMouseEnter : React.MouseEventHandler<HTMLParagraphElement>,
    onMouseExit : React.MouseEventHandler<HTMLParagraphElement>
}) {
  return (
    <p className="group flex justify-between items-center text-2xl font-light py-4 border-b cursor-pointer border-zinc-200 hover:border-zinc-900 hover:font-semibold transition-all duration-300 ease-in" onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
        <span>{children}</span>
        <ArrowRight size={24} className="text-zinc-500 -rotate-30 group-hover:rotate-360 transition-all duration-400 ease-in" />
    </p>
  )
}
