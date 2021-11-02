import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constant/constant";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${COLORS.TEXT};
    color:${COLORS.WHITE};
    font-family:  Helvetica, Sans-Serif;
  }
`;
export default GlobalStyle;
