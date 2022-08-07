import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Floor from '../components/Floor'
import LightBulb from '../components/LightBulb'
import Box from '../components/Box'

function three() {
  return (
    <div id="canvas-container" className='fixed z-50 top-0 left-0 w-screen h-screen'>
      <Canvas
        shadows={true}
        className="bg-black"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
          <Box rotateX={3} rotateY={0.2} />
          
          <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  )
}

export default three