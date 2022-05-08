import { HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <main className='flex flex-col flex-1 items-center space-y-8 py-12 overflow-hidden max-w-screen-xl mx-auto'>
        <h1 className='font-bold text-4xl lg:text-4xl text-center uppercase'>
            Oooops! Tu t&apos;es perdu!
        </h1>
        <h2 className='font-bold text-base lg:text-2xl text-center py-2 px-6'>
            Cette page n&apos;existe pas. 
        </h2>
        <img 
        className='w-3/4 rounded-lg shadow-inner shadow-red-600'
        src="https://c.tenor.com/3AaboPTeTt0AAAAC/broly.gif" alt="" />
        <Link href="/"><button className='flex space-x-3 text-2xl font-bold hover:text-orange-600 shadow-sm 
        shadow-orange-600 p-2 rounded-full'>
            <HomeIcon className='w-7 h-7'/> Accueil
        </button></Link>
    </main>
  )
}

export default NotFound