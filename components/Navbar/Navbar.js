import React, { useState } from 'react';
import clsx from 'clsx';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { breakpoints } from '../../theme/breakpoints';
import {
  Nav,
  Hamburger,
  MobileMenu,
  NavbarContainer,
  Icon,
  NavMenu,
  NavItem,
  NavLinks,
  IconWrapper,
  NavBtn,
  NavBtnLink,
  

} from './Navbar.styles';

import Link from 'next/link';

const MobileNav = () => {

  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  }

  return(
    <>
        <IconWrapper>
          <Icon></Icon>
        </IconWrapper>
      <Hamburger onClick={handleNav} className={clsx(navOpen ? 'colapse-spin' : ' ')}>
        <div className='inner'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Hamburger>
      <MobileMenu className={clsx(navOpen ? 'open' : '')}>
      </MobileMenu>
    </>
  );
}

const DesktopNav = () => {
  return(
    <>
    <Nav>
      <NavbarContainer>
        <IconWrapper>
        <Link href="/." passHref>
            <Icon></Icon>
          </Link>
        </IconWrapper>
        <NavMenu>
          <NavItem>
          <Link href="/login" passHref>
            <NavLinks><span>1.</span>About</NavLinks>
          </Link>
          </NavItem>
          <NavItem>
          <Link href="/login" passHref>
            <NavLinks><span>2.</span>Experience</NavLinks>
          </Link>
          </NavItem>
          <NavItem>
          <Link href="/login" passHref>
            <NavLinks><span>3.</span>Projects</NavLinks>
          </Link>
          </NavItem>
          <NavItem>
          <Link href="/login" passHref>
            <NavLinks><span>4.</span>Contact</NavLinks>
          </Link>
          </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signin'>Resume</NavBtnLink>
          </NavBtn>
      </NavbarContainer>
    </Nav>
    </>
  );
}

const Navbar = () => {

  const matchesMobile = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);

  return (
    <>
        <Nav>
          {matchesMobile &&
            <MobileNav />
          }
          {!matchesMobile &&
            <DesktopNav />
          }
        </Nav>
    </>
  )
}

export default Navbar