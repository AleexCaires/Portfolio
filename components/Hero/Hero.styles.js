import styled, {keyframes}from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { FiGithub, FiCodepen, FiLinkedin, FiTwitter} from "react-icons/fi";

export const HeroSection = styled.section`
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;
    background-image: url('/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 0 1000px rgba(37,30,62,0.91);
    opacity: 0.9;
`
export const HeroContent = styled.div`
    display: flex;
    flex-direction: row;
    
`

export const HeroLine = styled.div`
border-left: 1px solid ${p => p.theme.color.primaryColor};
margin: 30px 20px 20px 20px;
@media only screen and (min-width : 992px) {
    margin: 30px 20px 20px 120px;
}


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
    cursor:pointer;
`  

