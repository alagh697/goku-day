import React from 'react'

function Card({ sayanForm }: any) {
  return (
    <div
      className="duration-600 relative flex h-[600px] w-[375px] 
        transform flex-col overflow-hidden rounded-lg border border-yellow-500
    text-white shadow-sm shadow-orange-600 transition ease-out hover:scale-105 hover:cursor-pointer"
    >
      <img
        className="absolute h-full w-full rounded-t-sm object-cover brightness-110
        "
        src={`/card/${sayanForm.image}`}
      />

      <div
        className="absolute bottom-2 z-20 flex w-full flex-col items-center justify-center space-y-2 
          "
      >
        <h2
          className="-skew-x-6 rounded border-2 border-orange-600 bg-blue-800/80 p-2 text-center
            text-3xl font-bold uppercase shadow shadow-orange-600 text-shadow-lg"
        >
          {sayanForm.name}
        </h2>
        <div
          className="flex -skew-x-3 flex-col space-y-2 rounded border 
            border-orange-600 bg-gradient-to-r from-yellow-500 to-orange-500 py-2 px-4 shadow shadow-blue-800"
        >
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold italic text-shadow-md">
              Attack
            </span>
            <h3 className="text-2xl font-bold uppercase drop-shadow-xl text-shadow-lg ">
              {sayanForm.attack}
            </h3>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-semibold italic text-shadow-md">
              Power
            </span>
            <h3 className="text-4xl font-bold uppercase italic text-shadow-lg">
              {sayanForm.power}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
