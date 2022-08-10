import React from 'react'
import { Container } from "../Container/Container";
import { Headings } from '../Headings/Headings';
import { Links } from '../Links/Links'
import { ContactWrapper, Text } from './Contact.styles';
import { Btn, BtnInfo } from '../Button/Button.styles';


export default function Contact() {
  let count = 0;
    const handleClick = (e) => {
      count === 0 ? count++ : e.preventDefault();
    }
    
  return(
    <Container id="Contact">
        <Headings number="4" heading="Contact" position="right" />
        <ContactWrapper>
          <Text>
            <p>Do you need a helping hand on your project?</p>
            <p>If you want to get in touch to discuss an amazing project opportunity, job role, consultation, or you just want to say Hi, feel free to contact me using one of the options bellow.
            </p>
            <p><span>Twitter</span><Links target="_blank" href="https://twitter.com/tiiagoaleex" rel="noopener noreferrer">@TiiagoAleexx</Links></p>
            <p><span>LinkedIn</span><Links target="_blank" href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer">Alex Caires</Links></p>
          </Text>
          <Btn>
            <BtnInfo onClick={() => window.location = 'mailto:tiagoaleex@gmail.com'}> Email me</BtnInfo>
          </Btn>
        </ContactWrapper>
    </Container>
  )
}
