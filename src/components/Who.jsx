import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";


const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Contrainer = styled.div`
  height:100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (max-width: 1100px) and (min-width: 769px){
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1101px){
    width: 80%;

  }
`;

const First = styled.div`
  z-index: 1;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    }
  @media only screen and (max-width: 1100px) and (min-width: 769px){
    flex: 2;
    align-items: center;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1101px){
    flex: 2;
    margin-right: 1rem;
  }
`;

const Head = styled.h1`
  font-size: 4rem;
  color: #D94EFF;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) and (min-width: 769px){
    font-size: 2rem;
    text-align: center;
    }

  @media only screen and (max-width: 1400px) and (min-width: 1101px){
    font-size: 3rem;
  }
`;

const Quote = styled.h2`
  font-size: 2rem;
  color: #F2A154;
  @media only screen and (max-width: 768px){
    font-size: 1rem;
    }

  @media only screen and (max-width: 1400px) and (min-width: 769px){
    font-size: 1.5rem;
  
  }
`;

const Desc = styled.p`
  font-family: 'Pixel Font7', sans-serif;
  font-size: 1.5rem;
  color: #F2A154;
  margin-top: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    padding:0 10px ;
    }

  @media only screen and (max-width: 1400px) and (min-width: 769px){
    font-size: 1rem;
    padding:0 10px ;
  }
`;

const Second = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 1100px) and (min-width: 769px){
    flex: 2;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1101px){
    flex: 2;
  }

`;

const Img = styled.img`
  height: 800px;
  width: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin:auto;

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
    }

  @media only screen and (max-width: 1400px) and (min-width: 769px){
    height: 500px;
    width: 500px;
  }
`;

const ConCanvas = styled.div`
  height: 800px;
  width: 800px;
  object-fit: contain;
  position: absolute;
  top: 25%;
  left: 0;
  right: 20%;
  bottom: 0;
  margin:auto;

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
    right: 0;
    }
  
  @media only screen and (max-width: 1400px) and (min-width: 769px){
    height: 500px;
    width: 500px;
    top: 10%;
    right: 0;
  }
`
;

const Seemore = styled.button`
    z-index: 2;
    width: 100%;
    text-align: center;
    display: inline-block;
    margin:5px;
    font-weight: bold;
    padding: 10px 0 10px 10px ;
    background-color: lightgray;
    text-shadow: -1px -1px black, 1px 1px white;
    color: gray;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -o-border-radius: 7px;
    border-radius: 7px;
    box-shadow: 0 .2em gray; 
    cursor: pointer;
    &:active {
      box-shadow: none;
      position: relative;
      top: .2em;
`;

function Who() {
  return (
    <Section className="Who">
        <Contrainer>
          <Second>
            <Img src="./img/test.png" alt="Proflie"/>
            <ConCanvas>
              <Canvas>
                <OrbitControls  enableZoom={false} enableRotate={false} autoRotate={true} />
                <ambientLight intensity={3} />
                <directionalLight position={[1,2,3]}/>
                <mesh>
                  <boxGeometry args={[1,1,1]}/>
                  <meshStandardMaterial>
                    <RenderTexture attach={'map'}>
                    <PerspectiveCamera makeDefault position={[0,0,5]} />
                    <color attach="background" args={['#F2A154']} />
                    <Text fontSize={1}  color="black">HELLO</Text>
                    </RenderTexture>
                  </meshStandardMaterial>
                </mesh>
              </Canvas>
            </ConCanvas>
          </Second>
          <First>
            <Head>I'm sorawit</Head>
            <Quote>Digital Media Engineering Junior student</Quote>\
            <Desc>Hello, my name is Sorawit Nunsatit. As a university student majoring in digital media engineering at Khon Kaen University, I am interested in both the 3D and front-end development fields. Digital media engineering typically involves the application of engineering principles to the creation and manipulation of various forms of digital content. So my goal is to use creativity and technology together. If you want to see my previous works, you can scroll down or click a button.</Desc>
            <Link to='Work' smooth={true} duration={1000}><Seemore>See My Works!</Seemore></Link>
          </First>
        </Contrainer>
    </Section>
  );
}

export default Who;