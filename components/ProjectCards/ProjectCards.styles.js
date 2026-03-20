import styled, { css } from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import media from "styled-media-query";

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 22px;

  div {
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${media.greaterThan(breakpoints.small())`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        margin-bottom: 60px;

        div {
            margin-bottom: 0;
        }
    `}

  ${media.greaterThan(breakpoints.large())`
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
    `}
`;

export const StyledCard = styled.div`
  background: linear-gradient(180deg, rgba(16, 38, 59, 0.94), rgba(13, 31, 49, 0.96));
  color: ${(p) => p.theme.color.textPrimary};
  height: auto;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 143, 61, 0.22);
  }
`;

export const FeaturedImg = styled.div`
  width: 100%;
  height: 220px;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.82;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  padding: 1.6rem;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
`;

export const StyledTitle = styled.p`
  font-size: 1.45rem;
  line-height: 1.1;
  font-family: "Syne", sans-serif;
  color: ${(p) => p.theme.color.textPrimary};
  margin: 0;
`;
export const GitLink = styled.a`
  display: block;
  color: ${(p) => p.theme.color.primaryColor};
  width: 30px;
  cursor: pointer;
  svg {
    width: 100%;
    height: auto;
  }
`;

export const StyledDescription = styled.div`
  width: 100%;
  margin-top: 14px;
  color: ${(p) => p.theme.color.textMuted};
  line-height: 1.75;
`;
export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: ${(p) => p.theme.color.primaryColor};
  align-items: center;
  gap: 10px;
  margin-top: 24px;

  ${media.greaterThan(breakpoints.small())`
        flex-wrap: wrap;
    `}
`;

export const StyledTag = styled.div`
  display: flex;
  color: ${(p) => p.theme.color.textPrimary};
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.75rem;
  font-weight: 700;
`;

export const LiveLink = styled.a`
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.color.primaryColor};
  font-weight: 800;
  svg {
    margin-left: 5px;
    width: auto;
    height: auto;
  }

  ${media.greaterThan(breakpoints.small())`
        margin-left: auto;
    `}
`;
