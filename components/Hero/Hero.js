import React from 'react'
import { HeroSection, HeroLine, HeroTitle, HeroDescription, HeroWord, HeroName, HeroContent, HeroText} from './Hero.styles'

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
    </HeroSection>
    </>
  )
}

export default Hero