import styled, {keyframes}from "styled-components";
import { transparentize } from "polished";
import { AiOutlineDown } from "react-icons/ai";
import { 
        FiGithub, 
        FiCodepen, 
        FiLinkedin, 
        FiTwitter
} from "react-icons/fi";
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

`

export const HeroSection = styled.section`
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 0;
    background-image: linear-gradient(0deg, ${p=>p.theme.color.mainBG} 0%, ${p=>transparentize(1, p.theme.color.mainBG)} 50%),
                                url('/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 1000px rgba(37,30,62,0.91);
    opacity: 0.9;
`
export const HeroContent = styled(Container)`
    display: flex;
    padding-top: 0 !important;
`

export const HeroLine = styled.div`
    border-left: 1px solid ${p => p.theme.color.primaryColor};
    margin: 0 20px;
`
export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 115px;
    margin-right: 15px;

    @media only screen and (min-width : 768px) {
        margin-top: 25vh;
        margin-right: 40px;
    }
    @media only screen and (min-width : 992px) {
        margin-right: 300px;

    }

`

export const HeroTitle = styled.p`
    font-size: 18px;
    font-weight: lighter;
    color: #fff;

    @media only screen and (min-width : 768px) {
        font-size: 22px;
}

`

export const HeroName = styled.p`
    font-size: 42px;
    font-weight: bold;
    color: ${p => p.theme.color.primaryColor};
    margin-top: 0;
    margin-bottom: 20px;

    @media only screen and (min-width : 768px) {
        font-size: 56px;
        margin-top: -10px;
}

`

export const HeroDescription = styled.p`
    font-size: 24px;
    font-weight: normal;
    line-height: 1.6;
    color: #fff;
    margin: 20px 0 20px;

    @media only screen and (min-width : 768px) {
        font-size: 36px;
}
`

export const HeroWord = styled.p`
    font-size: 18px;
    font-weight: lighter;
    line-height: 1.6;
    margin-top: 0;
    color: #fff;

    @media only screen and (min-width : 768px) {
        font-size: 22px;
}

`

export const ScrollButton = styled(AiOutlineDown)`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    text-align: center;
    color: ${p => p.theme.color.primaryColor};
    width: 40px;
    height: 45px;
    cursor: pointer;
`

export const Sidebar = styled.div`
    width: 100px;
    bottom: 0;
    margin-left: auto;
    flex-direction: column;
    align-items: flex-start;
    color: ${p => p.theme.color.primaryColor};

    @media only screen and (max-width : 768px) {
        display: none;
}
`

export const SidebarIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;

    span{
        border: 1px solid  ${p => p.theme.color.primaryColor} ;
        height: 150px;
    }
`

export const GitIcon  = styled(FiGithub)`
    width: 25px;
    height: 25px;
    margin-bottom: 15px;
    cursor:pointer;
`   
export const CodePenIcon  = styled(FiCodepen)`
    width: 25px;
    height: 25px;
    margin-bottom: 15px;
    cursor:pointer;
`  
export const LinkedInIcon  = styled(FiLinkedin)`
    width: 25px;
    height: 25px;
    margin-bottom: 15px;
    cursor:pointer;
`  
export const TwitterIcon  = styled(FiTwitter)`
    width: 25px;
    height: 25px;
    margin-bottom: 15px;
    cursor: pointer;
`  

export const ScrollDownButton = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 50px;
    animation: ${animation} 3s linear infinite;

    ${media.greaterThan(breakpoints.small())`
        margin-top: -50px;
    `}

`