import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

a {
  text-decoration: none;
  color: black;
}

/* body {
  font-family: 'Cabin', sans-serif;
}


*,
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

html {
  word-break: keep-all;
  background-color: var(--color-background);

  * {
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      ::-webkit-scrollbar {
        display: none; 
      }
    }
}

body, html, #root {
  width: 100%;
  height: 100%;
}

a, a:visited {
  text-decoration: none;  
  color: inherit; 
}


button {
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  &:active {
    transform: scale(1.1);
  }
}

:root {
    --color-white: #fff;
    --color-black: #0f0f0f;
    --color-background: #f0f0f0;
    --color-footer-background: #ECEAE3;
    --color-light-gray: #CECDCD;
    --color-lightest-gray: #D4D4D4;
    --color-light-beige: #EED6BA;
    --color-light-green: #869B99;
    --color-light-pink: #CD8E91;
    --color-link: #545150;
    --color-main: #5B4E32;
    --color-text: #312E2E;
    --color-sub-text: #575555;
    --color-red: #C7291C;
  }*/
`;

export default GlobalStyle;
