import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex w-full flex-col items-center space-y-3 border-b border-gray-500/50 p-4 ">
      <h3 className="font-title text-3xl uppercase">Select a sayajin</h3>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img
            src="/card/Goku.jpg"
            className="duration-600 h-44 w-44 -skew-x-6 transform
    object-cover transition ease-out hover:scale-105 hover:cursor-pointer"
          />
        </Link>
        <Link href="/vegeta">
          <img
            src="/card/Vegeta.jpg"
            className="duration-600 h-44 w-44 -skew-x-6 transform object-cover
    brightness-50 transition ease-out hover:scale-105 hover:cursor-pointer"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
