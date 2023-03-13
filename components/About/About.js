import React from 'react'
import Image from 'next/image'
import { Headings } from '../Headings/Headings'
import { Container } from '../Container/Container'
import { 
    AboutSection,
    Octagon,
    Text,
    AboutWrapper,
} from './About.styles'
import { Links } from '../Links/Links'

//const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

export default function About() {
    return(
        <AboutSection id="About">
            <Container>
                <Headings number="1" heading="About" />
                <AboutWrapper>
                    <Octagon>
                        <div style={{backgroundImage: 'url("/portrait.jpg")'}}></div>
                    </Octagon>
                    <Text>
                        <p>Hello, <br></br>I am Tiago Caires.
                        Originally from Madeira Island, Portugal where I study Science and Technology to the vibrant city of London, United Kingdom where I started my career of Web development in 2018.
                        </p>
                        <p>With over 3 years of experience in a wide range of sectors from agency world, pharmaceutical, retail, finTech, and many others as a freelance contractor working from web banners and email campaigns to SPA&apos;s and WPA&apos;s expanding my experience and refining my knowledge in the field.</p>
                        <p>I am a young and eager developer, but that is not all! I love to keep my body as active as my mind by doing exercise, hikes and mountain biking.</p>
                        <p>If I sparked your interest and you would like to learn more about me or talk to me, I invite you to view my LinkedIn profile <Links target="_blank" href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer">here.</Links></p>
                    </Text>
                </AboutWrapper>
            </Container>
        </AboutSection>
    )
}