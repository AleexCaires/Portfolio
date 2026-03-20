import React from "react";
import { ExperienceMobile, ExperienceDesktop } from "../ExperienceComponent/ExperienceComponent";
import { Container } from "../Container/Container";
import { Headings } from "../Headings/Headings";
import { ExperienceDesktopOnly, ExperienceMobileOnly } from "./Experience.styles";

export default function Experience() {
  const ExperienceData = [
    {
      position: "Full-Stack Developer",
      company: "Conversio",
      date: "Sep 2022 - Present",
      description: `Build and ship UI features across ecommerce and conversion-focused experiences, working closely with design and experimentation teams to improve clarity, performance, and business outcomes.`,
    },
    {
      position: "Junior Full-Stack Developer",
      company: "ConversioCRO",
      date: "March 2022 - Sep 2022",
      description: `Joined the team as a junior developer and quickly moved into hands-on delivery of landing pages, experiments, and production-ready full-stack work for client campaigns.`,
    },
    {
      position: "Freelancer Full-Stack Developer",
      company: "Astrazeneca",
      date: "Sep 2021 - Present",
      description: `Supported product updates, UI improvements, and new feature delivery, including interactive SVG map work for a web application used by a large international audience.`,
    },
    {
      position: "Freelancer Full-Stack Developer",
      company: "RenderMedia",
      date: "May 2021  ",
      description: `Led the full-stack build for a mobile-first product launch page designed to increase conversion, aligning the implementation with an existing WordPress theme and a flexible ACF-driven content setup.`,
    },
    {
      position: "Freelancer Full-Stack Developer",
      company: "Caffe Nero",
      date: "March 2021",
      description: `Built a WordPress page template that parsed JSON content, selected language-specific menu data, and rendered it in a responsive layout using PHP, JavaScript, and SASS.`,
    },
    {
      position: "Freelancer Full-Stack Developer",
      company: "EveryFriday",
      date: "March 2021",
      description: `Delivered templates, landing pages, and codebase updates for multiple client sites, with careful cross-browser QA and reusable CMS-driven page structures.`,
    },
    {
      position: "Freelancer Full-Stack Developer",
      company: "Sharp Europe",
      date: "September 2020",
      description: `Extended and refreshed the Future of Work microsite, including a full rebuild of the blog experience from detailed design direction using HTML, SASS, and modern JavaScript.`,
    },
    {
      position: "Freelancer Full-Stack Developer",
      company: "Lyxor ETF",
      date: "September 2020 ",
      description: `Built interactive web banners for multiple European campaigns, translating storyboard concepts into performant assets with strong visual fidelity.`,
    },
  ];

  return (
    <Container id="Experience">
      <Headings number="2" heading="Experience" position="right" />
      <ExperienceMobileOnly>
        <ExperienceMobile data={ExperienceData} />
      </ExperienceMobileOnly>
      <ExperienceDesktopOnly>
        <ExperienceDesktop data={ExperienceData} />
      </ExperienceDesktopOnly>
    </Container>
  );
}
