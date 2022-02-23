import styled, {css} from 'styled-components'
import { breakpoints } from '../../theme/breakpoints'
import media from "styled-media-query"

export const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    div {
        margin-bottom: 20px;

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
`

export const StyledCard = styled.div`
    background-color: ${p => p.theme.color.secondaryBG};;
    color: white;
    height: auto;
    border-radius: 10px;
    box-shadow: 7px 7px 0px 0px ${p => p.theme.color.primaryColor};
`

export const FeaturedImg = styled.div`
    width: 100%;
    height: 0;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: height 0.4s ease-in-out;
    opacity: 0.4;

    &.hover {
        height: 140px;
    }
`

export const CardInner = styled.div`
    position: relative;
    width: 100%;
    padding: 1.5rem;
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -30px;
`

export const StyledTitle = styled.p`
    font-size: 22px;
    color: ${p => p.theme.color.primaryColor};
`
export const GitLink = styled.a`
    display: block;
    color: ${p => p.theme.color.primaryColor};
    width: 30px;
    cursor: pointer;
    svg {
        width: 100%;
        height: auto;
    }
`

export const StyledDescription = styled.div`
    width: 100%;
    height: ${p=>p.containerHeight};
    transition: height 0.4s ease-in-out;
    overflow: hidden;

    ${media.greaterThan(breakpoints.large())`
       // text-align: center;
    `}

`
export const CardFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    color: ${p => p.theme.color.primaryColor};
    align-items: center;
    margin-top: 30px;

    ${media.greaterThan(breakpoints.small())`
        flex-wrap: nowrap;
        justify-content: flex-start;
    `}
`

export const StyledTag = styled.div`
    display: flex;
    color: #999999;
    margin-right: 5px;
    text-decoration: underline;
    font-size: 12px;
`

export const LiveLink = styled.a`
    flex-basis: 100%;
    text-align: center;
    width: 30px;
    width: auto;
    cursor: pointer;

    svg{
        margin-left: 5px;
        width: auto;
        height: auto;
    }

    ${media.greaterThan(breakpoints.small())`
        flex-basis: auto;
        margin-left: auto;
    `}
`

