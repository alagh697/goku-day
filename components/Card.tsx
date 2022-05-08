import React from 'react'

function Card({sayanForm}: any) {
  return (
    <div className='relative w-[375px] h-[600px] flex flex-col 
        rounded-lg shadow-sm shadow-orange-600 border border-yellow-500 text-white
    hover:cursor-pointer overflow-hidden hover:scale-105 transition transform duration-600 ease-out'>
         
         <img className="absolute w-full h-full object-cover rounded-t-sm brightness-110
        " src={`/card/${sayanForm.image}`}/>


         <div className='z-20 absolute flex flex-col space-y-2 bottom-2 justify-center items-center w-full 
          '>
            <h2 className="text-3xl uppercase font-bold text-center bg-blue-800/80 shadow shadow-orange-600
            p-2 rounded border-2 border-orange-600 -skew-x-6 text-shadow-lg">
              {sayanForm.name}
              </h2>
            <div className="flex flex-col space-y-2 bg-gradient-to-r from-yellow-500 to-orange-500 
            py-2 px-4 rounded border border-orange-600 -skew-x-3 shadow shadow-blue-800">
              <div className='flex space-x-2 items-center'>
                <span className="text-xs font-semibold italic text-shadow-md">Attack</span>
                <h3 className="font-bold text-2xl uppercase drop-shadow-xl text-shadow-lg ">
                    {sayanForm.attack}</h3>
              </div>
              <div className='flex space-x-1 items-center'>
              <span className="text-sm font-semibold italic text-shadow-md">Power</span>
                <h3 className="font-bold text-4xl uppercase italic text-shadow-lg">{sayanForm.power}</h3>
              </div>
            </div>
            
         </div>
    </div>
  )
}

export default Card