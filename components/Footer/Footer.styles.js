import styled from 'styled-components'

export const FooterWrapper = styled.div`
    height: 156px;
    background-color: ${p => p.theme.color.secondaryBG};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
    height: 135px;
  }
  @media (min-width: 1024px) {
    height: 135px;
  }
`

export const FooterText = styled.div`
    padding: 25px;

    p{
        font-weight: 100;
        color: #fff;
        line-height: 19px;
       
        @media (min-width: 768px) {
    line-height: 25px;
  }
  @media (min-width: 1024px) {
    line-height: 25px;
  }
    }

    span{
        color: ${p => p.theme.color.primaryColor};
    }
`