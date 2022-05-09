import { HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <main className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center space-y-8 overflow-hidden py-12">
      <h1 className="text-center text-4xl font-bold uppercase lg:text-4xl">
        Oooops! Tu t&apos;es perdu!
      </h1>
      <h2 className="py-2 px-6 text-center text-base font-bold lg:text-2xl">
        Cette page n&apos;existe pas.
      </h2>
      <img
        className="w-3/4 rounded-lg shadow-inner shadow-red-600"
        src="https://c.tenor.com/3AaboPTeTt0AAAAC/broly.gif"
        alt=""
      />
      <Link href="/">
        <button
          className="flex space-x-3 rounded-full p-2 text-2xl font-bold 
        shadow-sm shadow-orange-600 hover:text-orange-600"
        >
          <HomeIcon className="h-7 w-7" /> Accueil
        </button>
      </Link>
    </main>
  )
}

export default NotFound
