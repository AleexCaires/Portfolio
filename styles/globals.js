import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    color-scheme: dark;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    overflow-x: hidden;
    background:
      radial-gradient(circle at top left, rgba(255, 143, 61, 0.18), transparent 28%),
      radial-gradient(circle at 80% 20%, rgba(54, 120, 173, 0.22), transparent 28%),
      linear-gradient(180deg, #071521 0%, #091a2a 44%, #050e17 100%);
    color: ${(p) => p.theme.color.textPrimary};
    font-family: 'Manrope', sans-serif;
    min-height: 100vh;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: rgba(255, 143, 61, 0.3);
    color: ${(p) => p.theme.color.textPrimary};
  }

  :focus-visible {
    outline: 2px solid ${(p) => p.theme.color.primaryColor};
    outline-offset: 3px;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    overflow-x: hidden;
  }
`;
