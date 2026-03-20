import styled, { keyframes } from "styled-components";
import { transparentize } from "polished";
import { AiOutlineDown } from "react-icons/ai";
import { FiGithub, FiCodepen, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Container } from "../Container/Container";
import { breakpoints } from "../../theme/breakpoints";
import media from "styled-media-query";

export const animation = keyframes`

0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }

`;

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: calc(100vh - 64px);
  padding: 32px 0 48px;
  background-image: linear-gradient(0deg, ${(p) => p.theme.color.mainBG} 0%, ${(p) => transparentize(1, p.theme.color.mainBG)} 50%), url("/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 0 1000px rgba(7, 21, 33, 0.86);

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 15% 20%, rgba(255, 143, 61, 0.22), transparent 24%), radial-gradient(circle at 80% 18%, rgba(56, 119, 170, 0.18), transparent 22%);
    pointer-events: none;
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 78px);
    padding: 40px 0 56px;
  }
`;
export const HeroContent = styled(Container)`
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 0 !important;
  padding-bottom: 0 !important;

  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export const HeroLine = styled.div`
  border-left: 1px solid rgba(255, 143, 61, 0.45);
  margin: 0 20px 0 0;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin-top: 36px;
  margin-right: 15px;
  text-align: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    margin-right: 0;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 10vh;
    margin-right: 40px;
    text-align: left;
    align-items: flex-start;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 8vh;
    margin-right: 80px;
  }
`;

export const HeroTitle = styled.p`
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${(p) => p.theme.color.primaryColor};
  margin-bottom: 12px;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroName = styled.p`
  font-size: clamp(3.5rem, 12vw, 7rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.07em;
  font-family: "Syne", sans-serif;
  color: ${(p) => p.theme.color.textPrimary};
  margin-top: 0;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    margin-top: -10px;
  }
`;

export const HeroDescription = styled.p`
  font-size: clamp(1.5rem, 4vw, 2.8rem);
  font-weight: 600;
  line-height: 1.18;
  color: ${(p) => p.theme.color.textPrimary};
  margin: 0 0 20px;
  max-width: 30ch;

  @media only screen and (min-width: 768px) {
    max-width: 100%;
  }
`;

export const HeroWord = styled.p`
  max-width: 62ch;
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.8;
  margin-top: 0;
  color: ${(p) => p.theme.color.textMuted};

  @media only screen and (min-width: 768px) {
    font-size: 1.14rem;
  }
`;

export const HeroMeta = styled.p`
  margin: 0 0 28px;
  color: ${(p) => p.theme.color.textPrimary};
  font-weight: 600;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: auto;
  }
`;

export const HeroPrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: 14px 22px;
  border-radius: 999px;
  background: ${(p) => p.theme.color.primaryColor};
  color: ${(p) => p.theme.color.mainBG};
  font-weight: 800;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(255, 143, 61, 0.26);
  }

  @media only screen and (min-width: 768px) {
    width: auto;
    min-width: 210px;
  }
`;

export const HeroSecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: 14px 22px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: ${(p) => p.theme.color.textPrimary};
  font-weight: 700;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 143, 61, 0.4);
  }

  @media only screen and (min-width: 768px) {
    width: auto;
    min-width: 210px;
  }
`;

export const ScrollButton = styled(AiOutlineDown).attrs({ as: "a" })`
  margin: 0 auto;
  display: inline-flex;
  flex-direction: row;
  text-align: center;
  color: ${(p) => p.theme.color.primaryColor};
  width: 40px;
  height: 45px;
  cursor: pointer;
`;

export const Sidebar = styled.div`
  width: 48px;
  position: absolute;
  right: 20px;
  bottom: 26px;
  flex-direction: column;
  align-items: flex-start;
  color: ${(p) => p.theme.color.primaryColor};
  z-index: 2;

  @media only screen and (min-width: 992px) {
    right: 34px;
    bottom: 34px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  span {
    border: 1px solid rgba(255, 143, 61, 0.35);
    height: 150px;
  }
`;

export const SidebarLink = styled.a`
  color: inherit;

  &:hover {
    color: ${(p) => p.theme.color.textPrimary};
  }
`;

export const GitIcon = styled(FiGithub)`
  width: 25px;
  height: 25px;
  margin-bottom: 15px;
  cursor: pointer;
`;
export const CodePenIcon = styled(FiCodepen)`
  width: 25px;
  height: 25px;
  margin-bottom: 15px;
  cursor: pointer;
`;
export const LinkedInIcon = styled(FiLinkedin)`
  width: 25px;
  height: 25px;
  margin-bottom: 15px;
  cursor: pointer;
`;
export const TwitterIcon = styled(FiTwitter)`
  width: 25px;
  height: 25px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const ScrollDownButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: 42px;
  animation: ${animation} 3s linear infinite;
  position: relative;
  z-index: 1;

  ${media.greaterThan(breakpoints.small())`
        margin-top: 24px;
    `}
`;
