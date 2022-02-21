import styled from 'styled-components'
import { breakpoints } from '../../theme/breakpoints'
import media from "styled-media-query"

export const Container = styled.section`
    width: 100%;
    max-width: ${p=>p.theme.sizing.maxWidth};
    margin: 0 auto;
    padding: 30px 20px;

    ${media.greaterThan(breakpoints.large())`
        padding: 40px 20px;
  `}

    ${media.greaterThan(breakpoints.xlarge())`
        padding: 60px 40px;
    `}
`