import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { StyledCard, FeaturedImg, CardInner, CardHeader, StyledTitle, GitLink, StyledDescription, CardFooter, StyledTag, LiveLink } from "./ProjectCards.styles";

export function Card({ Title, FeaturedImage, Description, Tags, LiveUrl, GitUrl }) {
  return (
    <StyledCard>
      <FeaturedImg style={{ backgroundImage: FeaturedImage }} />
      <CardInner>
        <CardHeader>
          <StyledTitle>{Title}</StyledTitle>
          {GitUrl && (
            <GitLink target="_blank" href={GitUrl} rel="noopener noreferrer">
              <FiGithub />
            </GitLink>
          )}
        </CardHeader>
        {Description && <StyledDescription>{Description}</StyledDescription>}
        <CardFooter>
          {Tags && Tags.map((Tag) => <StyledTag key={Tag}>{Tag}</StyledTag>)}
          {LiveUrl ? (
            <LiveLink target="_blank" href={LiveUrl} rel="noopener noreferrer">
              View Live <FaArrowRight />
            </LiveLink>
          ) : (
            <LiveLink as="span">Private build</LiveLink>
          )}
        </CardFooter>
      </CardInner>
    </StyledCard>
  );
}
