import styled from "styled-components";
import media from "styled-media-query";
import { breakpoints } from "../../theme/breakpoints";

export const AboutSection = styled.div`
  position: relative;
`;

export const Octagon = styled.div`
  position: relative;
  width: min(100%, 360px);
  aspect-ratio: 1 / 1.1;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 40px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(255, 143, 61, 0.14), rgba(255, 255, 255, 0.03));
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);

  img {
    object-fit: cover;
    object-position: center top;
  }

  &:before {
    content: "";
    position: absolute;
    inset: 14px;
    border: 1px solid rgba(255, 143, 61, 0.26);
    border-radius: 22px;
    z-index: 1;
    pointer-events: none;
  }

  &:after {
    content: "";
    position: absolute;
    inset: auto -12% -12% 40%;
    height: 34%;
    background: radial-gradient(circle, rgba(255, 143, 61, 0.22), transparent 68%);
    filter: blur(10px);
    z-index: 0;
  }

  ${media.greaterThan(breakpoints.small())`
      width: 36%;
      margin-bottom: 0;
  `}
`;

export const Text = styled.div`
  width: 100%;
  color: ${(p) => p.theme.color.textPrimary};
  line-height: 1.8;
  font-size: 1rem;
  margin-right: 0;

  p {
    margin: 0 0 18px;
    color: ${(p) => p.theme.color.textMuted};
    font-size: 1rem;
  }

  p:first-child {
    margin-top: 0;
    color: ${(p) => p.theme.color.textPrimary};
    font-size: 1.18rem;
    font-weight: 600;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ${media.greaterThan(breakpoints.small())`
    width: 56%;
    padding-right: 12px;
    margin-right: 30px;
  `}
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 28px 0;
`;

export const SkillItem = styled.span`
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 143, 61, 0.22);
  background: rgba(255, 255, 255, 0.04);
  color: ${(p) => p.theme.color.textPrimary};
  font-size: 0.92rem;
  font-weight: 700;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.greaterThan(breakpoints.small())`
    flex-direction: row;
    align-items: center;
    gap: 56px;
  `}
`;
