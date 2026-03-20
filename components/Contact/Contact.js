import React from "react";
import { Container } from "../Container/Container";
import { Headings } from "../Headings/Headings";
import { Links } from "../Links/Links";
import { ContactActions, ContactWrapper, ContactButton, ContactButtonSecondary, Text } from "./Contact.styles";

export default function Contact() {
  return (
    <Container id="Contact">
      <Headings number="4" heading="Contact" position="right" />
      <ContactWrapper>
        <Text>
          <p>Have a product, team, or idea that needs stronger full-stack execution?</p>
          <p>If you want to talk about a role, freelance project, collaboration, or a rebuild that needs more care in the details, get in touch. I&apos;m interested in thoughtful work and strong teams.</p>
        </Text>
        <ContactActions>
          <ContactButton href="mailto:tiagoaleex@gmail.com">Email me</ContactButton>
          <ContactButtonSecondary target="_blank" href="https://www.linkedin.com/in/alex-caires-b7b39b174/" rel="noopener noreferrer">
            Connect on LinkedIn
          </ContactButtonSecondary>
        </ContactActions>
      </ContactWrapper>
    </Container>
  );
}
