import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

a {
  text-decoration: none;
  color: black;
}


body, html, #root {
  width: 100%;
  height: 100%;  
  font-family: 'Nanum Gothic', sans-serif;
}




`;

export default GlobalStyle;
