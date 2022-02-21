import styled from 'styled-components'
import media from "styled-media-query";
import {breakpoints} from '../../theme/breakpoints';

export const Index = styled.span`
    color: ${p => p.theme.color.primaryColor};
    margin-right: 10px;
    font-weight: 300;
`;

export const HeadingContainer = styled.h1`
    position: relative;
    font-size: 2.625rem;
    color: white;
    margin-top: 0;
    margin-bottom: 40px;

    ${media.greaterThan(breakpoints.small())`
        font-size: 3.5rem;
        margin-bottom: 50px;
    `}

    ${media.greaterThan(breakpoints.xlarge())`
        margin-bottom: 80px;
    `}

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        bottom: -10px;
        height: 1px;
        background-color: ${p => p.theme.color.primaryColor};

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

