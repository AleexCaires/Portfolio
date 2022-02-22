import React from 'react'
import { Container } from "../Container/Container";
import { Headings } from '../Headings/Headings';
import { Links } from '../Links/Links'
import { ContactWrapper, Text } from './Contact.styles';
import { Btn, BtnInfo } from '../Button/Button.styles';


const Contact = () => {

  return (
    <Container id="Contact">
        <Headings number="4" heading="Contact" position="right" />
        <ContactWrapper>
          <Text>
            <p>Do you need a helping hand on your project?</p>
            <p>If you want to get in touch to discuss an amazing project opportunity, job role, consultation, or you just want to say "Hi", feel free to contact me via using one of the options bellow.
            </p>
            <p><span>Twitter</span><Links target="_blank" href="https://twitter.com/" rel="noopener noreferrer">AlexIgurtes</Links></p>
            <p><span>LinkedIn</span><Links target="_blank" href="https://twitter.com/" rel="noopener noreferrer">AlexIgurtes</Links></p>

          </Text>
          <Btn>
            <BtnInfo to='/signin'>Email me</BtnInfo>
          </Btn>
        </ContactWrapper>
    </Container>
  )
}

export default Contact