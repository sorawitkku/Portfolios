import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { BoxGeometry, Sphere } from "three";

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
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 1100px) and (min-width: 769px){
    width: 100%;
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1101px){
    width: 80%;
  }

`;

const First = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
  }
  @media only screen and (max-width: 1100px) and (min-width: 769px){
    flex: 1;
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
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
    }
  @media only screen and (max-width: 1100px) and (min-width: 769px){
    height: 400px;
    width: 400px;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1101px){
    height: 500px;
    width: 500px;
  
  }

`;

const Second = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    align-items: center;
    }
  @media only screen and (max-width: 1400px) and (min-width: 769px){
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
  
  }
`;

const Head = styled.h1`
  font-size: 4rem;
  color: #D94EFF;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
    }
  
  @media only screen and (max-width: 1400px) and (min-width: 769px){
    text-align: center;
    font-size: 3rem;
  }
`;

const Line = styled.img`
  height: 10px;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 1400px) and (min-width: 769px){
    height: 10px;
    margin-right: 1rem;
  }
`;

const Quote = styled.h2`
  display: flex;
  font-size: 2rem;
  color: #F2A154;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;

  @media only screen and (max-width: 768px) {
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
    }
  
  @media only screen and (max-width: 1400px) and (min-width: 769px){
    font-size: 1.5rem;
    text-align: center;
  }  
`;

const Seemore = styled.button`
    z-index: 1;
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
    }
    
`;


function Hero() {
  return (
    <Section className="Hero"> 
        <Contrainer>
            <Second>
                <Head>ZERO TO HERO</Head>
                <Quote><Line src="./img/line.png" alt="line"/>Front end developer Portfolio</Quote>\
                <Desc>This is my portfolio website using React javascript to improve my programming skills, which collects my previous work and information about me.</Desc>
                <Link to='Who' smooth={true} duration={1000}><Seemore>See More</Seemore></Link>
            </Second>
            <First>

              <Img src="./img/first.png" alt="first"/>
            </First>
        </Contrainer>
    </Section>
  );
}

export default Hero;