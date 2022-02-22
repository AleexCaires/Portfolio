import React, {useState} from 'react'
import { Container } from "../Container/Container";
import { Headings } from '../Headings/Headings';
import { Btn, BtnInfo } from '../Button/Button.styles';
import { Card } from '../ProjectCards/Card'
import { CardsContainer } from '../ProjectCards/CardsContainer'

const Projects = () => {

  const CardsData = [
    {
      title : 'FreeHand',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Odio facilisis mauris sit amet. Massa sed elementum tempus egestas sed sed risus pretium..',
      featuredImage: 'url("/work.jpeg")',
      tags: ['React', 'Css'],
      url: {
        live: 'https://free-hand.vercel.app/',
        github: 'https://github.com/AleexCaires/FreeHand',
      }
    },
    {
      title : 'QuizGame',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Odio facilisis mauris sit amet. Massa sed elementum tempus egestas sed sed risus pretium..',
      featuredImage: 'url("/work.jpeg")',
      tags: ['React', 'Css'],
      url: {
        live: 'https://free-hand.vercel.app/',
        github: 'https://github.com/AleexCaires/FreeHand',
      }
    },
    {
      title : 'PX2REM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Odio facilisis mauris sit amet. Massa sed elementum tempus egestas sed sed risus pretium..',
      featuredImage: 'url("/work.jpeg")',
      tags: ['React', 'Css'],
      url: {
        live: 'https://free-hand.vercel.app/',
        github: 'https://github.com/AleexCaires/FreeHand',
      }
    },
    
  ];

  // const [cards, setCards] = useState(CardsData.length);
  // const [viewCards, setViewCards] = useState(6);

  // const handleShowMore = () => {
  //   setViewCards(viewCards+6)
  // }

  return (
    <Container id="Projects">
        <Headings number="3" heading="Projects" />
        <CardsContainer>
          { CardsData && CardsData.map(card => 
            <Card 
              key={card.title}
              FeaturedImage={card.featuredImage}
              Title={card.title}
              Description={card.description ? card.description : ''}
              Tags={card.tags ? card.tags : ''}
              LiveUrl={card.url.live ? card.url.live : ''}
              GitUrl={card.url.github ? card.url.github : ''}
            />
          )}
        </CardsContainer>

        {/* { cards > viewCards &&
          <Btn>
            <BtnInfo to='' onClick={handleShowMore}>Show More</BtnInfo>
          </Btn>
        } */}
        
    </Container>
  )
}

export default Projects