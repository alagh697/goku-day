import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="flex w-full items-center justify-center border-t border-gray-500/50 py-5">
        <p>&copy; <Link href="https://ronindevo.com/">
          <a target="_blank" className="text-red-600 font-bold">Ronindevo</a></Link> Copyright 2022.</p>
    </footer>
  )
}

export default Footer