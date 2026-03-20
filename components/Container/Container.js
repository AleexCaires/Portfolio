import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import media from "styled-media-query";

export const Container = styled.section`
  width: 100%;
  max-width: ${(p) => p.theme.sizing.maxWidth};
  margin: 0 auto;
  padding: 32px 20px;

  ${media.greaterThan(breakpoints.small())`
        padding: 72px 28px;
    `}

  ${media.greaterThan(breakpoints.large())`
        padding: 104px 40px;
    `}
`;
