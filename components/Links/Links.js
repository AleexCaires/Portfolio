import styled from 'styled-components'

export const Links = styled.a`
    color: ${p => p.theme.color.primaryColor};
    text-decoration: underline;

    &:hover {
        text-decoration: none;
    }
`;