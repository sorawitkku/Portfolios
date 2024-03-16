import React, {useState} from "react";
import styled from "styled-components";
import Drawing from "./Drawing";
import Modeling from "./Modeling";
import Webdesign from "./Webdesign";
import Gamedesign from "./Gamedesign";

const Data = [
  'Web Development',
  '3D Modeling',
  "Game design",
  "Drawing",
];

const Section = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contrainer = styled.div`
    height:100%;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
flex:1;
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center; 
}
@media only screen and (max-width: 1100px) and (min-width: 769px){
  width: 100%;
  align-items: center; 
}
@media only screen and (max-width: 1400px) and (min-width: 1101px){
    width: 100%;
    margin-right: 1rem;
}

`;

const Second = styled.div`
flex:1;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 20px;
    `;

const ListItem = styled.li`
  font-size: 4rem;
  cursor: pointer;
  color: ${(props) => (props.isselected ? "#F2A154" : "transparent")};
  -webkit-text-stroke: ${(props) => (props.isselected ? "1px #F2A154" : "1px #D94EFF")};
  position: relative;
  transition: color 0.5s ease, -webkit-text-stroke 0.5s ease;

  &:hover {
    color: #F2A154;
    -webkit-text-stroke: 1px #F2A154;
    transition: color 0.5s ease, -webkit-text-stroke 0.5s ease;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    }
`;

const Desc = styled.div`
  display: flex;
  flex:2;
  font-family: 'Pixel Font7', sans-serif;
  font-size: 1.5rem;
  color: #F2A154;
  align-items: center;
  margin-right: 1rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin-right: 0;
    padding: 1rem;
    }

  @media only screen and (max-width: 1400px) and (min-width: 769px){
    padding: 1rem;
      }
  `;

const Empty = styled.div`
color: #F2A154;`;

function Work() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Section className="Work">
      <Contrainer>
        <Second>
          <List>
            {Data.map((item) => (
              <ListItem key={item} text={item} onClick={() => handleItemClick(item)} isselected={selectedItem === item} >{item}</ListItem>
            ))}
          </List>
          {selectedItem && (
            <Desc>
      
                  {selectedItem === '3D Modeling' && <p>This is an example of my 3D modeling work. Now I'm still practicing 3D modeling to use it on the website. I'm interested in 3D website fields. I usually use a blender and maya.</p>}
                  {selectedItem === 'Web Development' && <p>This is a website project called Fitwa.
This project is a group project. My duty is to be a frontend developer and do a little bit of design. This project mainly uses react-javascrpit and vite.js.</p>}
                  {selectedItem === 'Game design' && <p>This is a game design project for my project class. I received the duty of designing the game and state, as well as programming. In this project, the main language that we use is C#.</p>}
                  {selectedItem === 'Drawing' && <p>This is my art I usually draw when I have free time. It helps me with creativity.</p>}
            </Desc>)}
        </Second>
        <First>
          {!selectedItem ? (
            <Empty>
              <p>Please select an item from the list.</p>
            </Empty>
          ) : (
            <div>
              {selectedItem === '3D Modeling' && <Modeling />}
              {selectedItem === 'Web Development' && <Webdesign />}
              {selectedItem === 'Game design' && <Gamedesign />}
              {selectedItem === 'Drawing' && <Drawing />}
            </div>
          )}
        </First>
          )
      </Contrainer>
    </Section>
  );
}

export default Work;