import React from "react";
import Image from "next/image";
import { Headings } from "../Headings/Headings";
import { Container } from "../Container/Container";
import { AboutSection, AboutWrapper, Octagon, SkillItem, SkillsList, Text } from "./About.styles";
import { Links } from "../Links/Links";

export default function About() {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  return (
    <AboutSection id="About">
      <Container>
        <Headings number="1" heading="About" />
        <AboutWrapper>
          <Octagon>
            <Image src="/portrait.jpg" alt="Portrait of Alex Caires" layout="fill" />
          </Octagon>
          <Text>
            <p>I&apos;m Alex Caires, a full-stack engineer from Madeira now based in London. I build robust digital products that balance visual polish with practical product thinking.</p>
            <p>Over the last {experienceYears} years I&apos;ve worked across agency, freelance, and in-house teams, shipping marketing launches, CMS builds, single-page apps, and product features for retail, pharma, fintech, and service businesses.</p>
            <p>What I enjoy most is the space where UI craft, API design, and maintainable full-stack architecture overlap. Outside of work you&apos;ll usually find me hiking, training, or riding trails.</p>
            <SkillsList>
              <SkillItem>React</SkillItem>
              <SkillItem>Next.js</SkillItem>
              <SkillItem>TypeScript</SkillItem>
              <SkillItem>Design Systems</SkillItem>
              <SkillItem>Accessibility</SkillItem>
              <SkillItem>Performance</SkillItem>
            </SkillsList>
            <p>
              If you want a fuller picture of my background, you can view my LinkedIn profile{" "}
              <Links target="_blank" href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer">
                here
              </Links>
              .
            </p>
          </Text>
        </AboutWrapper>
      </Container>
    </AboutSection>
  );
}
