import styled from 'styled-components'
import media from "styled-media-query"
import { breakpoints } from '../../theme/breakpoints'

export const AboutSection = styled.div`
    margin: 30px 20px 20px 20px;

    @media screen and (min-width: 800px) {
    flex-direction: row;
`


export const Title = styled.p`
    font-size: 42px;
    border-bottom: 1px solid ${p => p.theme.color.primaryColor};
    color: #fff;

    span{
        color: ${p => p.theme.color.primaryColor};
        margin-right: 10px;
}
`

export const Octagon = styled.div`
  position: relative;
  width: 90%;
  padding-top: 90%;
  margin: 0 auto;
  overflow: visible;
  margin-bottom: 40px;
  
div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  overflow: hidden;
}

  &:before {
    content:"";
    position: absolute;
    background-color: ${p => p.theme.color.primaryColor};
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    top: 5px;
    left: 1px;
    right: -1px;
    bottom: -5px;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    z-index: 0;
  }

  &:hover {
    &:before {
      top: 15px;
      left: 10px;
      right: -10px;
      bottom: -15px;
    }
  }

  ${media.greaterThan(breakpoints.small())`
      width: 30%;
      margin-bottom: 0;
      padding-top: 30%;
  `}

`

export const Text = styled.div`
  width: 100%;
  color: #fff;
  line-height: 1.8;
  font-size: 16px;
  margin-right: 30px;

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ${media.greaterThan(breakpoints.small())`
    width: 50%;
  `}
`

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan(breakpoints.small())`
    flex-direction: row-reverse;
    align-items: flex-start;
  `}

    @media only screen and (min-width : 992px) {
      flex-direction: row-reverse;
    }
  `