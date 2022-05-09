import React from 'react'

function Banner() {
  return (
    <section className="rounded-lg bg-gradient-to-r from-blue-800/30 to-orange-600/30 p-4">
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4">
        <img className=" w-1/3" src="/kamehameha.png" />
        <div className="flex flex-col space-y-5">
          <h1 className="text-center font-title text-6xl uppercase text-orange-600">
            Son Goku Day
          </h1>

          <span className="flex justify-center">
            <span className="absolute inline-flex animate-ping text-center font-title text-8xl text-blue-700">
              Kamehameha!!!
            </span>
            <h2 className="relative inline-flex text-center font-title text-8xl text-blue-700">
              Kamehameha!!!
            </h2>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Banner
