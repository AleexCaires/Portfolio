import styled from "styled-components";
import { breakpoints } from "../../theme/breakpoints";
import media from "styled-media-query";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 28px;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(16, 38, 59, 0.94), rgba(13, 31, 49, 0.94));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.18);

  ${media.greaterThan(breakpoints.small())`
        text-align: center;
        padding: 42px;
  `}
`;
export const Text = styled.div`
  width: 100%;
  color: ${(p) => p.theme.color.textPrimary};
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 500;

  ${media.greaterThan(breakpoints.small())`
        font-size: 1.1rem;
  `}

  p {
    color: ${(p) => p.theme.color.textMuted};
    margin: 0 0 16px;
  }

  p:first-child {
    font-size: 1.8rem;
    line-height: 1.2;
    color: ${(p) => p.theme.color.textPrimary};
    font-family: "Syne", sans-serif;
    font-weight: 700;

    ${media.greaterThan(breakpoints.small())`
        font-size: 2.2rem;
  `}
  }
  p:last-child {
    margin-bottom: 0;
  }

  span {
    margin-right: 5px;
    color: ${(p) => p.theme.color.primaryColor};
    font-weight: 700;
  }
`;

export const ContactActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: stretch;

  ${media.greaterThan(breakpoints.small())`
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ContactButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: 14px 18px;
  border-radius: 999px;
  background: ${(p) => p.theme.color.primaryColor};
  color: ${(p) => p.theme.color.mainBG};
  font-weight: 800;

  ${media.greaterThan(breakpoints.small())`
    width: auto;
    min-width: 190px;
  `}
`;

export const ContactButtonSecondary = styled(ContactButton)`
  background: rgba(255, 255, 255, 0.04);
  color: ${(p) => p.theme.color.textPrimary};
  border: 1px solid rgba(255, 255, 255, 0.12);
`;
