import React from "react";
import { FooterWrapper, FooterText } from "./Footer.styles";
import { Links } from "../Links/Links";

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterText>
          <p>
            © {new Date().getFullYear()} Alex Caires. Built with{" "}
            <Links target="_blank" href="https://nextjs.org/" rel="noopener noreferrer">
              Next.js
            </Links>{" "}
            and deployed on{" "}
            <Links target="_blank" href="https://vercel.com" rel="noopener noreferrer">
              Vercel
            </Links>
            .
          </p>
        </FooterText>
      </FooterWrapper>
    </>
  );
}
