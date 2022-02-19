import React from 'react'
import { HeroSection, HeroLine, HeroTitle, HeroDescription, HeroWord, HeroName, HeroContent, HeroText,ScrollButton, Sidebar, SidebarIcons, GitIcon, CodePenIcon,LinkedInIcon, TwitterIcon } from './Hero.styles'
import { FiGithub, FiCodepen, FiLinkedin, FiTwitter} from "react-icons/fi";
import styled, { keyframes }from "styled-components";
import Link from 'next/link';   


const animation = keyframes`

0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }

`
 const ScrollDownButton = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 50px;
    animation: ${animation} 3s linear infinite;
`


const Hero = () => {
  return (
    <>
    <HeroSection>
        <HeroContent>
            <HeroLine></HeroLine>
            <HeroText>
                <HeroTitle>Hi, my name is</HeroTitle>
                <HeroName>Tiago Caires</HeroName>
                <HeroDescription>I build things in a machine to be used by humans.</HeroDescription>
                <HeroWord>I'm a frontend develop that specializes in the design and build of exceptional digital experiences.</HeroWord>
            </HeroText>
            </HeroContent>
            <Sidebar>
                <SidebarIcons>
                    <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <GitIcon></GitIcon>
                    </a>
                    <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <CodePenIcon></CodePenIcon>
                    </a>
                    <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <LinkedInIcon></LinkedInIcon>
                    </a>
                    <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <TwitterIcon></TwitterIcon>
                    </a>
                    <span></span>
                </SidebarIcons>
            </Sidebar>
            <ScrollDownButton>
                <ScrollButton />
            </ScrollDownButton>
            
    </HeroSection>
    </>
  )
}

export default Hero