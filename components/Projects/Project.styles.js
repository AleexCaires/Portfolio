import styled from 'styled-components'

export const Title = styled.p`
font-size: 42px;
border-bottom: 1px solid ${p => p.theme.color.primaryColor};
color: #fff;

span{
    color: ${p => p.theme.color.primaryColor};
    margin-right: 10px;
}
`