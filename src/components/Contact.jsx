import React, {useRef, useState} from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    
  }
`;
const Title = styled.h1`
  font-size: 3rem;
  color: #D94EFF;
`;

const Input = styled.input`
  font-size: 1.5rem;
  position: relative;
  display: block;
  background-color: #f4f7fb;
  font-family: 'Open Sans', sans-serif;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  outline-color: #9e9e9e;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
  `;
  

const Textarea = styled.textarea`
  font-size: 1.5rem;
  position: relative;
  display: block;
  background-color: #f4f7fb;
  font-family: 'Open Sans', sans-serif;
  border: none;
  box-shadow: none;
  border-radius: 5px;
  outline-color: #9e9e9e;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
  `
  
;

const Button = styled.button`
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

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fvxopp', 'template_rg0agfj', form.current, 'sEHR7nVctXZt1Zan4')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
          setDone(false);
      });
  };

  return (
    <Section className="Contact">
        <Container>
          <Form ref={form} onSubmit={sendEmail}>
            <Title>Contact</Title>
            <Input type="text" placeholder="Name" name="from_name"/>
            <Input type="email" placeholder="Email" name="email"/>
            <Textarea placeholder="Message" rows={10} name="message"/>
            <Button type="submit">Submit</Button>
            {done === true && <span style={{color: "green"}}>Message sent!</span>}
            {done === false && <span style={{color: "red"}}>Message failed to send!</span>}
          </Form>
        </Container>
    </Section>
  );
}

export default Contact;