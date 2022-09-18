import React, { useState } from 'react';
import clsx from 'clsx';
import { useMediaQuery } from "usehooks-ts";
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
  MobileNavLinks,
  MobileItem,
} from './Navbar.styles';

import Link from 'next/link';
import { useRouter } from 'next/router'


export function MobileNav() {

  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  }

  const router = useRouter();
    const handleClickDown = () => {
        router.push('./#Home');
    }

  return(
    <>
    <Nav>
      <NavbarContainer>
      <IconWrapper onClick={handleClickDown}>
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
      </NavMenu>
      </NavbarContainer>
    </Nav>
    <MobileMenu className={clsx(navOpen ? 'open' : '')}>
      <MobileItem>
          <Link href="/#About" passHref>
            <MobileNavLinks onClick={handleNav}><span>1.</span>About</MobileNavLinks>
          </Link>
          </MobileItem>
          <MobileItem>
          <Link href="/#Experience" passHref>
            <MobileNavLinks onClick={handleNav}><span>2.</span>Experience</MobileNavLinks>
          </Link>
          </MobileItem>
          <MobileItem>
          <Link href="/#Projects" passHref>
            <MobileNavLinks onClick={handleNav}><span>3.</span>Projects</MobileNavLinks>
          </Link>
          </MobileItem>
          <MobileItem>
          <Link href="/#Contact" passHref>
            <MobileNavLinks onClick={handleNav}><span>4.</span>Contact</MobileNavLinks>
          </Link>
          </MobileItem>
    </MobileMenu> 
    </>
  );
}

export function DesktopNav() {
  let count = 0;
  const handleClick = (e) => {
  count === 0 ? count++ : e.preventDefault();
  }

  const router = useRouter();
    const handleClickDown = () => {
        router.push('./#Home');
    }

  return(
    <>
    <Nav>
      <NavbarContainer>
        <IconWrapper onClick={handleClickDown}>
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
            <NavBtnLink onClick={handleClick} href='/Resume.pdf' download>Resume</NavBtnLink>
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
