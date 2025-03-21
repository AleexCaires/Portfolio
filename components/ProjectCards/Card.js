import React, { useState, useEffect } from "react";
import clsx from "clsx";
import useMeasure from 'react-use-measure';
import { FiGithub } from "react-icons/fi";
import { FaArrowRight } from 'react-icons/fa';
import {
  StyledCard,
  FeaturedImg,
  CardInner,
  CardHeader,
  StyledTitle,
  GitLink,
  StyledDescription,
  CardFooter,
  StyledTag,
  LiveLink
} from './ProjectCards.styles';

export function Card({
  Title,
  FeaturedImage,
  Description,
  Tags,
  LiveUrl,
  GitUrl,
  index, // Pass the index prop to each Card
  activeIndex, // Track the index of the active hovered card
  setActiveIndex, // Update the active hovered card index
}) {
  const [ref, bounds] = useMeasure();
  const [descriptionHeight, setDescriptionHeight] = useState('auto');
  const [descriptionOHeight, setDescriptionOHeight] = useState();

  const handleMouseIn = () => {
    setDescriptionOHeight(bounds.height + 'px');
    setDescriptionHeight('0px');
    setActiveIndex(index); // Set active index to the current card's index
  };

  const handleMouseOut = () => {
    if (activeIndex !== index) return; // Only reset if the hovered card is the active one
    setDescriptionHeight(descriptionOHeight);
    setActiveIndex(null); // Reset active index
  };

  useEffect(() => {
    const handleResize = () => {
      setDescriptionOHeight(bounds.height + 'px');
    };
    window.addEventListener('resize', handleResize);
  }, [bounds.height]);

  return (
    <StyledCard
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <FeaturedImg
        className={clsx(activeIndex === index ? 'hover' : '')}
        style={{ backgroundImage: FeaturedImage }}
      />
      <CardInner>
        <CardHeader>
          <StyledTitle>{Title}</StyledTitle>
          {GitUrl && (
            <GitLink target="_blank" href={GitUrl} rel="noopener noreferrer">
              <FiGithub />
            </GitLink>
          )}
        </CardHeader>
        {Description && (
          <StyledDescription
            ref={ref}
            className={clsx(activeIndex === index ? 'hover' : '')}
            style={{ height: descriptionHeight }}
          >
            {Description}
          </StyledDescription>
        )}
        <CardFooter>
          {Tags && Tags.map((Tag) => <StyledTag key={Tag}>{Tag}</StyledTag>)}
          <LiveLink
            target="_blank"
            href={LiveUrl}
            rel="noopener noreferrer"
          >
            View Live <FaArrowRight />
          </LiveLink>
        </CardFooter>
      </CardInner>
    </StyledCard>
  );
}
