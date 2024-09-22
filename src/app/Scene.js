import {React, useRef } from 'react'
import {useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export const Scene = () => {
    let tex=useTexture("./image.png")
    let cyl=useRef(null)
    useFrame((state,delta)=>{
        cyl.current.rotation.y +=delta
    })
     return (
    <group rotation={[0,1.5,.5]}>
        <mesh ref={cyl} >
        <cylinderGeometry args={[1,1,1,30,30,true]}/>
        <meshStandardMaterial transparent  map={tex} side={THREE.DoubleSide}/>
      </mesh>
    </group>
  )
}
