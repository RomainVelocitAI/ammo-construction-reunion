'use client'

import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

function IslandModel() {
  const { scene } = useGLTF('/models/fr_island.glb')
  const ref = useRef<THREE.Group>(null)

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (child.material) {
          child.material.side = THREE.DoubleSide
        }
      }
    })
  }, [scene])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15
    }
  })

  return (
    <group ref={ref} scale={0.072} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  )
}

export function Island3DScene() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 5, 5], fov: 50 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        gl={{ antialias: true, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false }}
        onCreated={({ gl }) => { gl.setClearColor(0x000000, 0) }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 2, -3]} intensity={0.4} />
        <Suspense fallback={null}>
          <IslandModel />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/fr_island.glb')
