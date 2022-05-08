import React from 'react'

function Banner() {
  return (
    <section className="p-4 rounded-lg bg-gradient-to-r from-blue-800/30 to-orange-600/30">
          <div className="flex flex-col md:flex-row md:space-x-4 justify-center items-center">
          <img className=" w-1/3"
          src="/kamehameha.png"  />
          <div className="flex flex-col space-y-5">
            <h1 className="uppercase font-title text-6xl text-center text-orange-600">
              Son Goku Day
            </h1>
            
            <span className="flex justify-center">
            <span className="animate-ping absolute inline-flex font-title text-8xl text-center text-blue-700">Kamehameha!!!</span>
            <h2 className="relative inline-flex font-title text-8xl text-center text-blue-700">Kamehameha!!!</h2>
            </span>
          </div>
          
          </div>
        </section>
  )
}

export default Banner