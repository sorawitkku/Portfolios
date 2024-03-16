import React from 'react';
import styled  from 'styled-components';

const Contrainer = styled.div`
  height: 100%;
  display: flex;
  `;

const Img = styled.img`
  flex:3;
  height: 800px;
  width: 800px;
  object-fit: contain;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin:auto;
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
    }
  @media screen and (max-width: 1400px) and (min-width: 769px){
    width: 500px;
    height: 500px;
    }
  `;

function Webdesign() {
  return (
      <Contrainer>
        <Img src='./img/Fitwa.png'/>
      </Contrainer>
  )
}

export default Webdesign
