import React from "react";
import { Container } from "../Container/Container";
import { Headings } from "../Headings/Headings";
import { Card } from "../ProjectCards/Card";
import { CardsContainer } from "../ProjectCards/CardsContainer";

export default function Projects() {
  const CardsData = [
    {
      title: "FreeHand",
      description: "A full-stack playground focused on building a single-page product experience from scratch with responsive layouts, component styling, and interaction detail.",
      featuredImage: 'url("/work.jpeg")',
      tags: ["React", "Styled Components"],
      url: {
        live: "https://free-hand.vercel.app/",
        github: "https://github.com/AleexCaires/FreeHand",
      },
    },
    {
      title: "QuizGame",
      description: "A typed React quiz experience powered by the Trivia API, built to sharpen state management, async data handling, and clean UI feedback.",
      featuredImage: 'url("/QuizGame.png")',
      tags: ["React", "Typescript", "Styled Components"],
      url: {
        live: "https://jogo-da-perguntinha.vercel.app/",
        github: "https://github.com/AleexCaires/Quiz-Game",
      },
    },
    {
      title: "PX2REM",
      description: "A desktop utility for converting points, pixels, percentages, and rem values through a lightweight interface designed for everyday full-stack workflows.",
      featuredImage: 'url("/px2rem_social.png")',
      tags: ["React", "Typescript", "Electron"],
      url: {
        live: "https://mario-duarte.github.io/PX2Rem/",
        github: "https://github.com/Mario-Duarte/PX2Rem",
      },
    },
    {
      title: "Calendar UI View",
      description: "A holiday tracking dashboard concept that syncs Google Calendar data into a clearer planning interface for teams and managers.",
      featuredImage: 'url("/CalendarUI.png")',
      tags: ["Javascript", "Python", "GitHub Actions"],
      url: {
        live: "",
      },
    },
    {
      title: "SandalWood Custom Carpentry",
      description: "A conversion-focused one-page site for a custom carpentry business, built to present craftsmanship clearly across mobile and desktop.",
      featuredImage: 'url("/Sandalwood.png")',
      tags: ["React"],
      url: {
        live: "https://sandalwoodcustomcarpentry.co.uk/",
      },
    },
    {
      title: "Inert Recycling Ltd",
      description: "A responsive marketing site for a haulage and recycling company, designed to explain services quickly and support lead generation.",
      featuredImage: 'url("/InertRecycling.png")',
      tags: ["React", "Styled Components"],
      url: {
        live: "https://inertrecycling.co.uk/",
      },
    },
  ];

  return (
    <Container id="Projects">
      <Headings number="3" heading="Projects" />
      <CardsContainer>
        {CardsData &&
          CardsData.map((card, index) => (
            <Card key={card.title} FeaturedImage={card.featuredImage} Title={card.title} Description={card.description ? card.description : ""} Tags={card.tags ? card.tags : ""} LiveUrl={card.url.live ? card.url.live : ""} GitUrl={card.url.github ? card.url.github : ""} />
          ))}
      </CardsContainer>
    </Container>
  );
}
