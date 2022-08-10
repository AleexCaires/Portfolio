import styled from 'styled-components'
import { breakpoints } from '../../theme/breakpoints'
import media from "styled-media-query"

export const Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const BtnInfo = styled.a`
    width: 100%;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: ${p => p.theme.color.primaryColor};
    border: 1px solid ${p => p.theme.color.primaryColor};
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 300;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${p => p.theme.color.secondaryColor};
        color: #fff;
    }

    ${media.greaterThan(breakpoints.large())`
        width: 180px;
  `}
`
