import React from "react";
import Link from "next/link";
import {
  HeroSection,
  HeroLine,
  HeroTitle,
  HeroDescription,
  HeroWord,
  HeroName,
  HeroContent,
  HeroText,
  HeroActions,
  HeroMeta,
  HeroPrimaryLink,
  HeroSecondaryLink,
  ScrollButton,
  Sidebar,
  SidebarIcons,
  SidebarLink,
  GitIcon,
  CodePenIcon,
  LinkedInIcon,
  TwitterIcon,
  ScrollDownButton,
} from "./Hero.styles";

export default function Hero() {
  return (
    <>
      <HeroSection id="Home">
        <HeroContent>
          <HeroLine></HeroLine>
          <HeroText>
            <HeroTitle>Full-stack engineer based in London</HeroTitle>
            <HeroName>Alex Caires</HeroName>
            <HeroDescription>I design and build calm, high-trust interfaces that make complex products feel clear and usable.</HeroDescription>
            <HeroWord>I work across product UI, APIs, and full-stack systems with a focus on scalable architecture, accessibility, and polished interaction design.</HeroWord>
            <HeroActions>
              <Link href="/#Projects" passHref>
                <HeroPrimaryLink>See selected work</HeroPrimaryLink>
              </Link>
              <Link href="/#Contact" passHref>
                <HeroSecondaryLink>Start a conversation</HeroSecondaryLink>
              </Link>
            </HeroActions>
          </HeroText>
        </HeroContent>
        <Sidebar>
          <SidebarIcons>
            <SidebarLink aria-label="GitHub profile" target="_blank" href="https://github.com/AleexCaires" rel="noopener noreferrer">
              <GitIcon></GitIcon>
            </SidebarLink>
            <SidebarLink aria-label="CodePen profile" target="_blank" href="https://codepen.io/AlexDesigns" rel="noopener noreferrer">
              <CodePenIcon></CodePenIcon>
            </SidebarLink>
            <SidebarLink aria-label="LinkedIn profile" target="_blank" href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer">
              <LinkedInIcon></LinkedInIcon>
            </SidebarLink>
            <SidebarLink aria-label="Twitter profile" target="_blank" href="https://twitter.com/tiiagoaleex" rel="noopener noreferrer">
              <TwitterIcon></TwitterIcon>
            </SidebarLink>
            <span></span>
          </SidebarIcons>
        </Sidebar>
        <ScrollDownButton>
          <Link href="/#About" passHref>
            <ScrollButton aria-label="Scroll to About section" />
          </Link>
        </ScrollDownButton>
      </HeroSection>
    </>
  );
}
