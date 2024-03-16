import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import Hero from './components/Hero';
import Who from './components/Who';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const GlobalStyles = createGlobalStyle`
body{
  width: 100%;
  font-family: 'ArcadeClassic', sans-serif;                                                                 
  margin: 0 auto;
  background: url('./img/bg.jpg') center fixed no-repeat;
  background-size: cover;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
      display: none;}
}
`;

const Section = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Section>
      <GlobalStyles/>
      <Navbar/>
      <Hero/>
      <Who/>
      <Work/>
      <Contact/>
    </Section>
  )
}

export default App
