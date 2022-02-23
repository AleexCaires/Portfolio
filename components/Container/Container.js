import styled from 'styled-components'
import { breakpoints } from '../../theme/breakpoints'
import media from "styled-media-query"

export const Container = styled.section`
    width: 100%;
    max-width: ${p=>p.theme.sizing.maxWidth};
    margin: 0 auto;
    padding: 30px 20px;

    ${media.greaterThan(breakpoints.small())`
        padding: 60px 20px;
    `}

    ${media.greaterThan(breakpoints.large())`
        padding: 120px 40px;
    `}
`