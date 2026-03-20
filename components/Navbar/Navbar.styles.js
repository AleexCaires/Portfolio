import styled from "styled-components";
import LogoIcon from "../Logo/LogoIcon";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: rgba(7, 21, 33, 0.78);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  height: 64px;
  z-index: 20;

  @media (min-width: 768px) {
    height: 78px;
  }
  @media (min-width: 1024px) {
    height: 88px;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  z-index: 1;
  max-width: ${(p) => p.theme.sizing.maxWidth};
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    height: 78px;
    padding: 0 28px;
  }
  @media (min-width: 1024px) {
    height: 88px;
    padding: 0 40px;
  }
`;
export const Icon = styled(LogoIcon)`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export const IconWrapper = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    justify-content: center;
    list-style: none;
    text-align: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    list-style: none;
    text-align: center;
  }
`;
export const NavItem = styled.li`
  height: auto;
`;
export const NavLinks = styled.a`
  color: ${(p) => p.theme.color.textPrimary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  &.active {
    border-bottom: 2px solid ${(p) => p.theme.color.primaryColor};
  }
  &:hover {
    color: ${(p) => p.theme.color.primaryColor};
  }

  span {
    margin-right: 5px;
    color: ${(p) => p.theme.color.primaryColor};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;
export const NavBtnLink = styled.a`
  min-width: 132px;
  background: rgba(255, 143, 61, 0.08);
  white-space: nowrap;
  padding: 12px 18px;
  color: ${(p) => p.theme.color.primaryColor};
  border: 1px solid rgba(255, 143, 61, 0.4);
  border-radius: 999px;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
  font-weight: 700;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(p) => p.theme.color.primaryColor};
    color: ${(p) => p.theme.color.mainBG};
  }
`;

export const Hamburger = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  .inner {
    width: 22px;
    height: 16px;
    margin: 0;
    position: relative;
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 22px;
      height: 2px;
      border-radius: 1px;
      background-color: ${(p) => p.theme.color.primaryColor};
      transition:
        top 0.2s ease-in-out 0.4s,
        transform 0.4s ease-in-out,
        opacity 0.2s ease-in-out 0.2s,
        left 0.2s ease-in-out;
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 7px;
      }
      &:nth-child(3) {
        top: 14px;
      }
    }
  }
  &.colapse-spin {
    .inner {
      span {
        transition:
          top 0.2s ease-in-out,
          transform 0.4s ease-in-out 0.2s,
          opacity 0.1s ease-in-out 0.2s;
        &:nth-child(1) {
          top: 7px;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          top: 7px;
          opacity: 0;
        }
        &:nth-child(3) {
          top: 7px;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  height: calc(100dvh - 64px);
  width: 100%;
  overflow-y: auto;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease;
  background: linear-gradient(180deg, rgba(7, 21, 33, 0.98), rgba(9, 26, 42, 0.98));
  z-index: 19;
  padding: 20px 0 32px;

  @media (min-width: 768px) {
    top: 78px;
    height: calc(100dvh - 78px);
  }

  &.open {
    transform: translateX(0);
    pointer-events: auto;
    opacity: 1;
  }
  &.closed {
    opacity: 0;
  }
`;

export const MobileWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const MobileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 12px 20px;
`;

export const MobileNavLinks = styled.a`
  display: block;
  width: 100%;
  color: ${(p) => p.theme.color.textPrimary};
  font-weight: 700;
  font-size: 1.15rem;
  padding: 12px 0;
  &.active {
    border-bottom: 2px solid ${(p) => p.theme.color.primaryColor};
  }
  &:hover {
    color: ${(p) => p.theme.color.primaryColor};
  }

  span {
    margin-right: 5px;
    color: ${(p) => p.theme.color.primaryColor};
  }
`;
