import React from 'react'
import { useRouter } from 'next/router'
import { 
    FiGithub, 
    FiCodepen,
    FiLinkedin,
    FiTwitter
} from "react-icons/fi";
import Link from 'next/link';
import { 
    HeroSection, 
    HeroLine, 
    HeroTitle, 
    HeroDescription, 
    HeroWord, 
    HeroName, 
    HeroContent, 
    HeroText,
    ScrollButton, 
    Sidebar, 
    SidebarIcons,
    GitIcon, 
    CodePenIcon,
    LinkedInIcon,
    TwitterIcon,
    ScrollDownButton
} from './Hero.styles'

export default function Hero() {

    const router = useRouter();
    const handleClickDown = () => {
        router.push('./#About');
    }

    return(
    <>
        <HeroSection id="Home">
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
                        <a target="_blank" href="https://github.com/AleexCaires" rel="noopener noreferrer">
                            <GitIcon></GitIcon>
                        </a>
                        <a target="_blank" href="https://codepen.io/AlexDesigns" rel="noopener noreferrer">
                            <CodePenIcon></CodePenIcon>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer">
                            <LinkedInIcon></LinkedInIcon>
                        </a>
                        <a target="_blank" href="https://twitter.com/tiiagoaleex" rel="noopener noreferrer">
                            <TwitterIcon></TwitterIcon>
                        </a>
                        <span></span>
                    </SidebarIcons>
                </Sidebar>
                <ScrollDownButton>
                    <ScrollButton onClick={handleClickDown} />
                </ScrollDownButton>
                
        </HeroSection>
    </>
    )
}
