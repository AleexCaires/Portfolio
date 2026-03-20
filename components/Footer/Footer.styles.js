import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: rgba(5, 14, 23, 0.86);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    min-height: 120px;
  }
  @media (min-width: 1024px) {
    min-height: 120px;
  }
`;

export const FooterText = styled.div`
  padding: 28px 20px;

  p {
    font-weight: 500;
    color: ${(p) => p.theme.color.textMuted};
    line-height: 1.7;

    @media (min-width: 768px) {
      line-height: 1.7;
    }
    @media (min-width: 1024px) {
      line-height: 1.7;
    }
  }

  span {
    color: ${(p) => p.theme.color.primaryColor};
  }
`;
