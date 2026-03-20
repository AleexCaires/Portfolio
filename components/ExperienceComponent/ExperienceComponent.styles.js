import styled, { keyframes } from "styled-components";
import media from "styled-media-query";
import { breakpoints } from "../../theme/breakpoints";

const contentReveal = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;

  ${media.greaterThan(breakpoints.small())`
        gap: 20px;
    `}

  &.mobile-experience {
    .mobile-list {
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .mobile-company {
      margin-bottom: 12px;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.07);
      background: linear-gradient(180deg, rgba(16, 38, 59, 0.95), rgba(13, 31, 49, 0.95));
      overflow: hidden;
    }

    .mobile-trigger {
      width: 100%;
      border: 0;
      background: transparent;
      color: ${(p) => p.theme.color.textPrimary};
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      font-weight: 700;
      text-align: left;
      cursor: pointer;
    }

    .mobile-chevron {
      flex-shrink: 0;
      transition: transform 0.2s ease;

      &.open {
        transform: rotate(180deg);
      }
    }

    .mobile-content {
      color: ${(p) => p.theme.color.textMuted};
      padding: 0 16px 16px;

      h1 {
        margin: 0 0 8px;
        font-size: 1.05rem;
        line-height: 1.35;

        span {
          color: ${(p) => p.theme.color.primaryColor};
        }
      }

      p {
        margin: 0;
        line-height: 1.7;
      }

      p:first-of-type {
        margin-bottom: 12px;
        font-size: 0.82rem;
        font-weight: 700;
        color: ${(p) => p.theme.color.textPrimary};
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      &.open {
        display: block;
        border-top: 1px solid rgba(255, 143, 61, 0.24);
        padding-top: 14px;
        margin-top: -2px;
      }

      &.closed {
        display: none;
      }
    }
  }
`;

export const Tabs = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;

  li {
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    color: ${(p) => p.theme.color.textMuted};
    min-height: auto;
    padding: 12px 16px;
    font-weight: 700;
    font-size: 0.92rem;
    border: 1px solid transparent;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    width: auto;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);

    &:before {
      content: "";
      position: absolute;
      left: 14px;
      right: 14px;
      bottom: 0;
      height: 2px;
      border-radius: 999px;
      background: transparent;
      transition: background 0.3s ease;
    }

    &:hover,
    &.active {
      color: ${(p) => p.theme.color.textPrimary};
      border-color: rgba(255, 143, 61, 0.16);
      background: rgba(255, 143, 61, 0.08);
      transform: translateY(-2px);
    }

    &.active {
      &:before {
        background: ${(p) => p.theme.color.primaryColor};
      }
    }
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 320px;
  padding: 38px 40px;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, rgba(16, 38, 59, 0.94), rgba(13, 31, 49, 0.94));
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.18);

  &:after {
    content: "";
    position: absolute;
    inset: auto 24px 20px auto;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(255, 143, 61, 0.1), transparent 70%);
    pointer-events: none;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(p) => p.theme.color.textPrimary};
  text-align: left;
  overflow: hidden;
  transition: opacity 0.4s ease-in-out;
  animation: ${contentReveal} 0.35s ease-out;
  z-index: 1;

  &.active {
    opacity: 1;
    display: flex;
  }

  &.inactive {
    opacity: 0;
    display: none;
  }

  h1 {
    font-size: 1.8rem;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 10px;
    span {
      color: ${(p) => p.theme.color.primaryColor};
    }
  }
  p {
    font-weight: 500;
    color: ${(p) => p.theme.color.textMuted};
    line-height: 1.8;
    max-width: 58ch;
    margin: 0;
  }
  p:first-of-type {
    margin-top: 0;
    font-size: 0.9rem;
    color: ${(p) => p.theme.color.textPrimary};
    margin-bottom: 18px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
  }
`;
