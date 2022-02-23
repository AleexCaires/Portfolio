import styled from 'styled-components'
import { breakpoints } from '../../theme/breakpoints'
import media from "styled-media-query"

export const Title = styled.p`
  font-size: 42px;
  border-bottom: 1px solid ${p => p.theme.color.primaryColor};
  color: #fff;

span{
    color: ${p => p.theme.color.primaryColor};
    margin-right: 10px;
}
`

export const ContactWrapper = styled.div`
 
 ${media.greaterThan(breakpoints.small())`
        text-align: center;
  `}
`
export const Text = styled.div`
     width: 100%;
  color: #fff;
  line-height: 1.8;
  font-size: 16px;
  margin-right: 30px;
  font-weight: 300;

  ${media.greaterThan(breakpoints.small())`
        font-size: 22px
  `}

  p:first-child {
    font-size: 26px;

    ${media.greaterThan(breakpoints.small())`
        font-size: 28px;
  `}
  }
  p:last-child {
    margin-top: -15px;
  }

  span{
      margin-right: 5px;
  }
`