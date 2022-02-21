import React from 'react'
import Accordion from '../Accordion/Accordion'
import { Container } from "../Container/Container";
import { Headings } from '../Headings/Headings';
import { Title } from './Experience.styles'

const Experience = () => {
  return (
    <Container id="Experience">
        <Headings number="2" heading="Experience" position="right" />
        <Accordion />
    </Container>
  )
}

export default Experience