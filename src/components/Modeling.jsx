import { Canvas } from '@react-three/fiber'
import React from 'react'
import A from './A'
import { OrbitControls, Stage } from '@react-three/drei'
import styled from 'styled-components'

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
`;

const CanvasCon = styled.div``;

function Modeling() {
  return (
    <Container>
        <Canvas>
          <Stage environment="city" intensity={0.6}>
              <A/>
          </Stage>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={true}/>
        </Canvas>
    </Container>

  )
}

export default Modeling