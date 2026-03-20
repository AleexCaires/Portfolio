import React, { useState } from "react";
import clsx from "clsx";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { breakpoints } from "../../theme/breakpoints";
import { Nav, Hamburger, MobileMenu, NavbarContainer, Icon, NavMenu, NavItem, NavLinks, IconWrapper, NavBtn, NavBtnLink, MobileNavLinks, MobileItem } from "./Navbar.styles";

import Link from "next/link";

export function MobileNav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen((current) => !current);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <Link href="/#Home" passHref>
          <IconWrapper aria-label="Go to top of page" onClick={closeNav}>
            <Icon />
          </IconWrapper>
        </Link>
        <NavMenu>
          <Hamburger onClick={handleNav} className={clsx(navOpen ? "colapse-spin" : "")} aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={navOpen} aria-controls="mobile-menu" type="button">
            <div className="inner">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Hamburger>
        </NavMenu>
      </NavbarContainer>
      <MobileMenu id="mobile-menu" className={clsx(navOpen ? "open" : "")}>
        <MobileItem>
          <Link href="/#About" passHref>
            <MobileNavLinks onClick={closeNav}>
              <span>1.</span>About
            </MobileNavLinks>
          </Link>
        </MobileItem>
        <MobileItem>
          <Link href="/#Experience" passHref>
            <MobileNavLinks onClick={closeNav}>
              <span>2.</span>Experience
            </MobileNavLinks>
          </Link>
        </MobileItem>
        <MobileItem>
          <Link href="/#Projects" passHref>
            <MobileNavLinks onClick={closeNav}>
              <span>3.</span>Projects
            </MobileNavLinks>
          </Link>
        </MobileItem>
        <MobileItem>
          <Link href="/#Contact" passHref>
            <MobileNavLinks onClick={closeNav}>
              <span>4.</span>Contact
            </MobileNavLinks>
          </Link>
        </MobileItem>
        <MobileItem>
          <NavBtnLink href="/Resume.pdf" download>
            Resume
          </NavBtnLink>
        </MobileItem>
      </MobileMenu>
    </>
  );
}

export function DesktopNav() {
  return (
    <>
      <NavbarContainer>
        <Link href="/#Home" passHref>
          <IconWrapper aria-label="Go to top of page">
            <Icon />
          </IconWrapper>
        </Link>
        <NavMenu>
          <NavItem>
            <Link href="/#About" passHref>
              <NavLinks>
                <span>1.</span>About
              </NavLinks>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#Experience" passHref>
              <NavLinks>
                <span>2.</span>Experience
              </NavLinks>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#Projects" passHref>
              <NavLinks>
                <span>3.</span>Projects
              </NavLinks>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#Contact" passHref>
              <NavLinks>
                <span>4.</span>Contact
              </NavLinks>
            </Link>
          </NavItem>
          <NavBtn>
            <NavBtnLink href="/Resume.pdf" download>
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavbarContainer>
    </>
  );
}

export default function Navbar() {
  const matchesMobile = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);

  return (
    <>
      <Nav>{matchesMobile ? <MobileNav /> : <DesktopNav />}</Nav>
    </>
  );
}
