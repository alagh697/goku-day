import React from 'react'

function Banner() {
  return (
    <section className="rounded-lg bg-gradient-to-r from-orange-400 via-yellow-100 to-orange-400 p-6 ">
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 overflow-hidden">
        <img className="w-72" src="/kamehameha.png" />
        <div className="flex flex-col space-y-5">
          <h1 className="text-center font-title text-6xl uppercase text-orange-600">
            Son Goku Day
          </h1>

          <span className="flex justify-center">
            <span className="absolute inline-flex animate-ping  font-title text-7xl text-blue-700 m-3">
              Kamehameha!
            </span>
            <h2 className="relative inline-flex font-title text-7xl text-blue-700 m-3">
              Kamehameha!
            </h2>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Banner
