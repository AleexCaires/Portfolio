import React from 'react'
import { FooterWrapper, FooterText } from './Footer.styles'
import { Links } from '../Links/Links'

export default function Footer() {
  return(
    <>
      <FooterWrapper>
        <FooterText>
          <p>© {new Date().getFullYear()} - Coded by Alex Caires <br /> powered by <Links target="_blank" href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer">NextJS</Links> and Hosted by <Links target="_blank" href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer">Vercel.</Links></p>
        </FooterText>
          
      </FooterWrapper>
    </>
  )
}
