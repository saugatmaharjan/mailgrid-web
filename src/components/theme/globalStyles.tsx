import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts[0]}, sans-serif;
  }

  body {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    color: ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.powderWhite}
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .flex-one {
    flex: 1;
  }

  .text-light {
    color: ${props => props.theme.colors.lighterGray}
  }

  .text-warning {
    color: ${props => props.theme.colors.red}
  }
`;

export default GlobalStyle;
