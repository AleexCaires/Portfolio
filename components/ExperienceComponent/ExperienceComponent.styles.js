import styled from 'styled-components'
import media from "styled-media-query"
import { breakpoints } from '../../theme/breakpoints'

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    ${media.greaterThan(breakpoints.small())`
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;


    `}

    ${media.greaterThan(breakpoints.xlarge())`
        
    `}

    ul{
    color: white;
}





    .company{
        list-style: none;
        cursor: pointer;
        padding: 15px;
        background: ${p => p.theme.color.secondaryBG};
        text-align: end;
        width: 100%;
        

        .content {
            color: white;
            transition: 0.4s;
            

            span{
                color: ${p => p.theme.color.primaryColor};
            }

            p{
                
            }
            p:first-of-type{
                font-size: 12px;
                margin-top: -10px;
                font-weight: 300;
            }

            &.open {
        opacity: 1;
        border-bottom: 1px solid ${p => p.theme.color.primaryColor};
        }

        &.closed {
            opacity: 0;
            display: none;
  overflow: hidden;

        }
            }
    }
`

export const Tabs = styled.ul`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    li {
        display: inline-block;
        list-style: none;
        color: white;
        padding: 15px 20px;
        font-weight: 400;
        font-size: 1rem;
        border-right: 2px solid transparent;
        transition: all 0.4s ease-in-out;
        white-space: nowrap;

        &:hover,
        &.active {
            color: ${p => p.theme.color.primaryColor};
            border-right: 2px solid ${p => p.theme.color.primaryColor};
        }
    }
`

export const ContentContainer = styled.div`
    position: relative;
    width: 80%;
    padding: 40px 20px;
    background-color: ${p => p.theme.color.secondaryBG};
    border-radius: 10px;
`

export const Content = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    color: white;
    text-align: right;
    overflow: hidden;
    transition: all 0.8s ease-in-out;

    &.active {
        opacity: 1;
    }

    &.inactive {
        opacity: 0;
    }

    h1{
        font-size: 22px;
        margin-top: 0;
    span{
        color: ${p => p.theme.color.primaryColor};
        }
    }
    p{
        font-weight: 300;
    }
    p:first-of-type{
        margin-top: -10px;
        font-size: 14px;
    }
    
`