import React from 'react'
import { useMediaQuery } from 'usehooks-ts';
import { breakpoints } from '../../theme/breakpoints';
import { ExperienceMobile, ExperienceDesktop } from '../ExperienceComponent/ExperienceComponent';
import { Container } from "../Container/Container";
import { Headings } from '../Headings/Headings';
import { Title } from './Experience.styles'
import { useState, useEffect } from 'react';

export default function Experience() {

  const matchesMobile = useMediaQuery(`(max-width: 767px)`);

  const ExperienceData = [
    {
      position: 'Junior Frontend Developer',
      company: 'Conversio',
      date: 'March 2022 - Present',
      description: `Started working as a Junior Front end Developer, current position Front end developer.`,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'Astrazeneca',
      date: 'Sep 2021 - Present',
      description: `I am worked in a Freelance Role, where I do web support and general UI Updates to the application. 
      Also worked with a team of developers to build new features and provide support in adding interactive SVG maps to one of their web apps used by thousands of users. `,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'RenderMedia',
      date: 'May 2021  ',
      description: `To help with the launch of the client new product where I was in charge of creating a highly engadging, mobile first, 
      marketing page that highlighted the new product and helped with the conversion rate driving new users to download and use the software.
      This page was built in harmony with their existing Wordpress Theme and branding guidelines, with the use of ACF to create a easy to use admin interface.   `,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'Caffe Nero',
      date: 'March 2021',
      description: `Worked in a project, where I had to create a Wordpress page template that, loaded a JSON File, selected the correct menu which is language specific,
      displayed all the items in a responsive grid layout, primarily using PHP, Wordpress, ACF, JavaScript(ES6) and SASS/CSS.
       `,
    },
    {
      position: 'Freelancer Front-End Developer',
      company: 'EveryFriday',
      date: 'March 2021',
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

    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768);
      }
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <Container id="Experience">
        <Headings number="2" heading="Experience" position="right" />
        { isMobile ? <ExperienceMobile data={ExperienceData} /> : <ExperienceDesktop data={ExperienceData} /> }
      </Container>
    );
  
  
}