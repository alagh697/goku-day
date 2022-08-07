import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Text3D, TrackballControls } from '@react-three/drei'
import rdKeywords from '../data/seoKeywords.json'



function Word({ children, ...props }: any) {
    const color = new THREE.Color()
    const fontProps = { font: '/fonts/Rajdhani-Bold.ttf', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef<any>(null)
    const [hovered, setHovered] = useState(false)
    const over = (e:Event) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(():any => {
      if (hovered) document.body.style.cursor = 'grab'
      return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera, clock }) => {
      // Make text face the camera
      if(ref.current){
      ref.current.quaternion.copy(camera.quaternion)
      ref.current.material.color.lerp(color.set(hovered ? '#ff1414' : 'white'), 0.1)}
      else{
        console.log('error')
      }
      // Animate font color
      
      //ref.current.rotation.y =  0.0005 
    })
    return ( 
    <Text 
    ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
    )
  }
  
  function Cloud({ radius = 20 }: any) {
    // Create a count x count random words with spherical distribution
    const sphere =useRef<any>(null)
    const words = useMemo(() => {
      const temp = []
      const spherical = new THREE.Spherical()
      const phiSpan = Math.PI / (rdKeywords.length + 1)
      const thetaSpan = (Math.PI * 2) / rdKeywords.length
      for (let i = 1; i < rdKeywords.length + 1; i++)
        // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
        for (let j = 0; j < rdKeywords.length; j++){
            temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), rdKeywords[j].keyword])
        }
      return temp
    }, [radius])
    //useFrame(() => (sphere.current.rotation.y += 0.0002))
    return (<mesh ref={sphere}>
      {words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)}
      </mesh>
    )
  }


function space() {
    
  return (
    <div id="canvas-container" 
    className='h-80 bg-black border border-red-600 rounded-xl shadow-sm shadow-red-600'>
       <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud radius={22} />
      <TrackballControls 
      addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
    </Canvas>
    </div>
  )
}

export default space