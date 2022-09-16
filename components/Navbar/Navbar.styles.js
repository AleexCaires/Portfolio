import styled from 'styled-components';
import { darken } from 'polished';
import LogoIcon from '../Logo/LogoIcon';


export const Nav = styled.nav`
    position: sticky;
    top: 0;
    background: ${p => darken(0.01, p.theme.color.mainBG)};
    height: 40px;
    z-index: 9;

    @media (min-width: 768px) {
    height: 60px;
  }
  @media (min-width: 1024px) {
    height: 80px;
  }
`
export const NavbarContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    z-index: 1;
    padding: 0 24px;

    @media (min-width: 768px) {
    height: 60px;
  }
  @media (min-width: 1024px) {
    height: 80px;
  }
`
export const Icon = styled(LogoIcon)`
    cursor: pointer;
    width: 30px;
    height: 30px;
`

export const IconWrapper = styled.div`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
`

export const NavMenu = styled.ul`

    @media (min-width: 768px) {
        display:  flex;
        justify-content: center;
        list-style: none;
        text-align: center;
    }
    
    @media (min-width: 1024px) {
        display:  flex;
        justify-content: center;
        list-style: none;
        text-align: center;
    }
`
export const NavItem = styled.li`
    height: auto;
`
export const NavLinks = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    font-weight: 300;
    &.active {
        border-bottom: 2px solid ${p => p.theme.color.primaryColor};
    }
    &:hover {
        color: ${p => p.theme.color.primaryColor};
    }

    span{
        margin-right: 5px;
        color: ${p => p.theme.color.primaryColor};
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`
export const NavBtnLink = styled.a`
    width: 120px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: ${p => p.theme.color.primaryColor};
    border: 1px solid ${p => p.theme.color.primaryColor};
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 300;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${p => p.theme.color.secondaryColor};
        color: #fff;
    }
    
`

export const Hamburger = styled.figure`
    align-self: center;
    cursor: pointer;
    .inner {
        width: 18px;
        height: 14px;
        margin: 20px auto;
        position: relative;
        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 18px;
            height: 2px;
            border-radius: 1px;
            background-color: ${p => p.theme.color.primaryColor};
            transition: top 0.2s ease-in-out 0.4s, 
                            transform 0.4s ease-in-out, 
                            opacity 0.2s ease-in-out 0.2s,
                            left 0.2s ease-in-out;
            &:nth-child(1) {
                top: 0;
            }
            &:nth-child(2), &:nth-child(4) {
                top: 6px;
            }
            &:nth-child(3) {
                top: 12px;
            }
        }
    }
    &.colapse-spin {
        .inner {
            span {
                transition: top 0.2s ease-in-out, 
                    transform 0.4s ease-in-out 0.2s, 
                    opacity 0.1s ease-in-out 0.2s;
                &:nth-child(1) {
                    top: 6px;
                    transform: rotate(45deg);
                }
                &:nth-child(2) {
                    top: 6px;
                    opacity: 0;
                }
                &:nth-child(3) {
                    top: 6px;
                    transform: rotate(-45deg);
                }
            }
        }
    }

`;

export const MobileMenu = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: hidden;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    pointer-events: none;
    opacity: 0;
    transition: all 0.5s ease;
    background-color: #2B2348;

    &.open {
        transform: translateX(0);
        pointer-events: auto;
        opacity: 1;
    }
    &.closed {
        opacity: 0;
    }
`

export const MobileWrapper = styled.div`
    display: block;
    width: 100%;
    height: 100%;
`

export const MobileItem = styled.div`
    display: flex;
    flex-direction: column;
    align items: center;
    height: 50px;
    padding: 20px;
`

export const MobileNavLinks = styled.div`
    color: white;
    font-weight: 300;
    &.active {
        border-bottom: 2px solid ${p => p.theme.color.primaryColor};
    }
    &:hover {
        color: ${p => p.theme.color.primaryColor};
    }

    span{
        margin-right: 5px;
        color: ${p => p.theme.color.primaryColor};
    }


`