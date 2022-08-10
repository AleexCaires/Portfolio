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


export function MobileNav() {

  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  }

  return(
    <>
    <Nav>
      <NavbarContainer>
      <IconWrapper>
      <Link href="/#Home" passHref>
            <Icon></Icon>
      </Link>
      </IconWrapper>
      <NavMenu>
        <Hamburger onClick={handleNav} className={clsx(navOpen ? 'colapse-spin' : ' ')}>
          <div className='inner'>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </Hamburger>
        <MobileMenu className={clsx(navOpen ? 'open' : '')}></MobileMenu> 
      </NavMenu>
      </NavbarContainer>
    </Nav>
    </>
  );
}

export function DesktopNav() {
  let count = 0;
  const handleClick = (e) => {
  count === 0 ? count++ : e.preventDefault();
  }

  return(
    <>
    <Nav>
      <NavbarContainer>
        <IconWrapper>
        <Link href="/#Home" passHref>
            <Icon></Icon>
        </Link>
        </IconWrapper>
        <NavMenu>
          <NavItem>
          <Link href="/#About" passHref>
            <NavLinks><span>1.</span>About</NavLinks>
          </Link>
          </NavItem>
          <NavItem>
          <Link href="/#Experience" passHref>
            <NavLinks><span>2.</span>Experience</NavLinks>
          </Link>
          </NavItem>
          <NavItem>
          <Link href="/#Projects" passHref>
            <NavLinks><span>3.</span>Projects</NavLinks>
          </Link>
          </NavItem>
          <NavItem>
          <Link href="/#Contact" passHref>
            <NavLinks><span>4.</span>Contact</NavLinks>
          </Link>
          </NavItem>
          <NavBtn>  
             {/* Add the Resume download in the public files and target it with "href path"  */}    
            <NavBtnLink onClick={handleClick} href='/background.jpg' download>Resume</NavBtnLink>
          </NavBtn>
        </NavMenu>      
      </NavbarContainer>
    </Nav>
    </>
  );
}

export default function Navbar()  {

  const matchesMobile = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);

  return(
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
