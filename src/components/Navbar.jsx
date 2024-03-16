import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll"

const Section = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
    @media only screen and (max-width: 1100px) {
        width: 100%;
    }
    @media only screen and (max-width: 1400px) {
        width: 100%;

    }
`;

const Nav = styled.div`
    margin-top: 1rem;
    position: fixed;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    z-index: 3;
    @media only screen and (max-width: 768px) {
        width: 100%;
        align-items: center;
        }
    @media only screen and (max-width: 1100px) and (min-width: 769px){
        width: 100%;
        align-items: center;
    }
    @media only screen and (max-width: 1400px) {
        width: 80%;
        align-items: center;
    }
`;

const Logo = styled.img`
    height: 50px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        margin-left: 1rem;
        }
    @media only screen and (max-width: 1100px) and (min-width: 769px){
        margin-left: 1rem;
        }
        
    
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        margin-right: 1rem;
        }
    @media only screen and (max-width: 1100px) and (min-width: 769px){
        margin-right: 1rem;
    }
`;      
const ListItem = styled.li`
    color: #F2A154;
    cursor: pointer;
    &:hover{
        color:#D94EFF ;
    }
`;
function Navbar() {
  return (
    <Section>
        <Nav>
        <Link to='Hero' smooth={true} duration={500}><Logo src="./img/logo.png" alt="logo"/></Link>
            <List>
                <ListItem><Link to='Hero' smooth={true} duration={500}>Home</Link></ListItem>
                <ListItem><Link to='Who' smooth={true} duration={500}>About</Link></ListItem>
                <ListItem><Link to='Work' smooth={true} duration={500}>Works</Link></ListItem>
                <ListItem><Link to='Contact' smooth={true} duration={500}>Contact</Link></ListItem>
            </List>
        </Nav>
    </Section>
  );
}

export default Navbar;