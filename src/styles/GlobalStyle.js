import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #f4f4f4;
    --secondary-color: #333533;
    --dark-color: #242423;
    --yellow-color: #f5cb5c;
    --gray-color: #cfdbd5;
  }

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: var(--primary-color);
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
    width: 100%;
  }
  .container {
    background-color: var(--primary-color);
    float: right;
    height: 100vh;
    position: relative;
    width: calc(100% - 256px)
  }
  .pageContent {
    margin: 40px 60px;
  }

  .absoluteBtn {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 500;
    height: 75px;
    transition: .4s;
    position: absolute;
    cursor: pointer;
    :hover {
      transform: translate(0, -5px);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.19);
      background-color: var(--dark-color);
    }
  }
`;
