import React, { useState } from 'react';
import { Container } from "../Container/Container";
import { Headings } from '../Headings/Headings';
import { Btn, BtnInfo } from '../Button/Button.styles';
import { Card } from '../ProjectCards/Card';
import { CardsContainer } from '../ProjectCards/CardsContainer';

export default function Projects() {
  const CardsData = [
    {
      title: 'FreeHand',
      description:
        'FreeHand is a Single Page Application, that was built with the purpose of learning how to build an SPA from scratch, with responsiveness in mind.',
      featuredImage: 'url("/work.jpeg")',
      tags: ['React', 'Styled Components'],
      url: {
        live: 'https://free-hand.vercel.app/',
        github: 'https://github.com/AleexCaires/FreeHand',
      },
    },
    {
      title: 'QuizGame',
      description:
        'Quiz Game is a simple Quiz created with React and Typescript, all questions and answers are implemented from Trivia API as a data source.',
      featuredImage: 'url("/QuizGame.png")',
      tags: ['React', 'Typescript', 'Styled Components'],
      url: {
        live: 'https://jogo-da-perguntinha.vercel.app/',
        github: 'https://github.com/AleexCaires/Quiz-Game',
      },
    },
    {
      title: 'PX2REM',
      description:
        'PX2REM is a simple application that converts points, pixels, percentage, and rem interchangeably with a simple and clean interface.',
      featuredImage: 'url("/px2rem_social.png")',
      tags: ['React', 'Typescript', 'Electron'],
      url: {
        live: 'https://mario-duarte.github.io/PX2Rem/',
        github: 'https://github.com/Mario-Duarte/PX2Rem',
      },
    },
    {
      title: 'Calendar UI View',
      description:
        "Built and designed a Holiday Tracker View that fetches data from Google Calendar and displays it in an intuitive front-end UI.",
      featuredImage: 'url("/CalendarUI.png")',
      tags: ['Javascript',"Python","GitHub Actions"],
      url: {
        live: '/.',
      },
    },
    {
      title: 'SandalWood Custom Carpentry',
      description:
        "Built a one-page portfolio website to showcase a carpentry builder's work, featuring a responsive and user-friendly design.",
      featuredImage: 'url("/Sandalwood.png")',
      tags: ['React'],
      url: {
        live: 'https://sandalwoodcustomcarpentry.co.uk/',
      },
    },
    {
      title: 'Inert Recycling Ltd',
      description:
        "Built and designed a website to showcase a haulage company's services, featuring a responsive design.",
      featuredImage: 'url("/InertRecycling.png")',
      tags: ['React',"Styled Components"],
      url: {
        live: 'https://www.inertrecycling.co.uk/',
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null); // Track the active hovered card index

  const [cards, setCards] = useState(CardsData.length);
  const [viewCards, setViewCards] = useState(6);

  const handleShowMore = () => {
    setViewCards(viewCards + 6);
  };

  return (
    <Container id="Projects">
      <Headings number="3" heading="Projects" />
      <CardsContainer>
        {CardsData &&
          CardsData.map((card, index) => (
            <Card
              key={card.title}
              index={index} // Pass index to Card
              activeIndex={activeIndex} // Pass active index
              setActiveIndex={setActiveIndex} // Pass setter function to Card
              FeaturedImage={card.featuredImage}
              Title={card.title}
              Description={card.description ? card.description : ''}
              Tags={card.tags ? card.tags : ''}
              LiveUrl={card.url.live ? card.url.live : ''}
              GitUrl={card.url.github ? card.url.github : ''}
            />
          ))}
      </CardsContainer>

      {cards > viewCards && (
        <Btn>
          <BtnInfo to="" onClick={handleShowMore}>
            Show More
          </BtnInfo>
        </Btn>
      )}
    </Container>
  );
}
