import styled from "styled-components";
import media from "styled-media-query";
import { breakpoints } from "../../theme/breakpoints";

export const ExperienceMobileOnly = styled.div`
  display: block;

  ${media.greaterThan(breakpoints.small())`
        display: none;
    `}
`;

export const ExperienceDesktopOnly = styled.div`
  display: none;

  ${media.greaterThan(breakpoints.small())`
        display: block;
    `}
`;
