/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 a.gltf --transfrom 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/a.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.24, 0.139, -2.225]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={-1}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane_5.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane_6.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane_7.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Plane_8.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Plane_9.geometry} material={materials['Material.009']} />
      </group>
    </group>
  )
}

useGLTF.preload('/a.gltf')
