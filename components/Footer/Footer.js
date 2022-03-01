import React from 'react'
import { FooterWrapper, FooterText } from './Footer.styles'
import { Links } from '../Links/Links'

export default function Footer() {
  return(
    <>
      <FooterWrapper>
        <FooterText>
          <p>© {new Date().getFullYear()} - Coded by Alex Caires <br /> powered by <Links target="_blank" href="https://nextjs.org/" rel="noopener noreferrer">NextJS</Links> and Hosted by <Links target="_blank" href="https://vercel.com" rel="noopener noreferrer">Vercel.</Links></p>
        </FooterText>
          
      </FooterWrapper>
    </>
  )
}
