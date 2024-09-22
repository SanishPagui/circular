"use client"
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Scene } from './Scene'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


const page = () => {
  return (
    <Canvas flat camera={{fov:35}}>
      <OrbitControls/>
      <ambientLight/>
      <Scene/>
      <EffectComposer>
        <Bloom
        mipmapBlur
        intensity={20}
        luminanceThreshold={0}
        luminanceSmoothing={0}
        />
      </EffectComposer>      
    </Canvas>
  )
}

export default page