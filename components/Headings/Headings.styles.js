import styled from "styled-components";
import media from "styled-media-query";
import { breakpoints } from "../../theme/breakpoints";

export const Index = styled.span`
  color: ${(p) => p.theme.color.primaryColor};
  margin-right: 12px;
  font-weight: 700;
  font-family: "Syne", sans-serif;
`;

export const HeadingContainer = styled.h1`
  position: relative;
  font-size: 2.5rem;
  color: ${(p) => p.theme.color.textPrimary};
  margin-top: 0;
  margin-bottom: 44px;
  font-family: "Syne", sans-serif;
  line-height: 1.05;
  letter-spacing: -0.04em;

  ${media.greaterThan(breakpoints.small())`
        font-size: 4rem;
        margin-bottom: 58px;
    `}

  ${media.greaterThan(breakpoints.xlarge())`
        margin-bottom: 80px;
    `}

    &:after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -14px;
    height: 1px;
    background: linear-gradient(90deg, ${(p) => p.theme.color.primaryColor}, transparent 70%);

    ${media.greaterThan(breakpoints.large())`
            width: 75%;
        `}

    ${media.greaterThan(breakpoints.xlarge())`
            width: 50%;
        `}
  }

  &.position-left {
    text-align: left;
    &:after {
      left: 0;
    }
  }
  &.position-right {
    text-align: left;
    ${media.greaterThan(breakpoints.large())`
            text-align: right;
        `}
    &:after {
      right: 0;
    }
  }
`;
