import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex flex-col space-y-3 items-center w-full border-b border-gray-500/50 p-4 ">
    <h3 className="font-title uppercase text-3xl">Select a sayajin</h3>
    <div className="flex items-center space-x-4">
    <Link href="/">
      <img src="/card/Goku.jpg" className="w-44 h-44 object-cover -skew-x-6 hover:cursor-pointer
    hover:scale-105 transition transform duration-600 ease-out" /></Link>
     <Link href="/vegeta"><img src="/card/Vegeta.jpg" className="w-44 h-44 object-cover -skew-x-6 brightness-50 hover:cursor-pointer
    hover:scale-105 transition transform duration-600 ease-out" /></Link>
    </div>
   
  </header>
  )
}

export default Header