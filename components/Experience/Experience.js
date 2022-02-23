import React from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { breakpoints } from '../../theme/breakpoints';
import { ExperienceMobile, ExperienceDesktop } from '../ExperienceComponent/ExperienceComponent';
import { Container } from "../Container/Container";
import { Headings } from '../Headings/Headings';
import { Title } from './Experience.styles'

export default function Experience() {

  const matchesMobile = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);

  const ExperienceData = [
    {
      position: 'Freelancer Front-End Developer',
      company: 'Astrazeneca',
      date: 'Sep 2021 - Present',
      description: `I am currently in a Freelance Role, where I do web support and general Ui Updates to the 'myMove' application. 
      Also worked with a team of developers to build new features and provide support in adding interactive SVG maps to one of their web apps used by thousands of users. `,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'RenderMedia',
      date: 'May 2021 - ',
      description: `Worked in a project where I had to create a simple download page `,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'Caffe Nero',
      date: 'March 2021 - ',
      description: `Worked in a project, where I had to create a Wordpress page template that, loaded a JSON File, selected the correct menu which is language specific,
      displayed all the items in a responsive grid layout, primarily using PHP, Wordpress, ACF, JavaScript(ES6) and SASS/CSS.
       `,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'EveryFriday',
      date: 'March 2021 -',
      description: `Worked in a few projects where I had to build new templates, new pages, and make updates to the codebase, building new features, allowing the Client to 
      create new Pages using one of the created templates, also had to manually test sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness was pixel perfect.
      Primarily using PHP, Wordpress, ACF, JavaScript(ES6) and SASS/CSS`,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'Sharp Europe',
      date: 'September 2020',
      description: `Worked in a project where I had to Build, Update and add new features to their "Future of Work" micro website.
      In this project, I remade the Blog page, trough following a pixel perfect design, primarily using HTML5, SASS and modern JavaScript via GitHub version control.`,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'Lyxor ETF',
      date: 'September 2020 ',
      description: `I worked for a Lyxor ETF project, where I had to Build Web Banners for multiple European campaigns.
      These web banners were created and crafted by hand from storyboards in Sketch app to maximize interactivity and image quality of end product.`,
    },
  ];

  return(
    <Container id="Experience">
        <Headings number="2" heading="Experience" position="right" />
        { matchesMobile ? <ExperienceMobile data={ExperienceData} /> : <ExperienceDesktop data={ExperienceData} /> }
    </Container>
  )
}