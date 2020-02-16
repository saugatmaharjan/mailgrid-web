import { DefaultTheme } from "styled-components";

const appTheme: DefaultTheme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    defaultWhite: "#ddd",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    gray: "#484848",
    lighterGray: "#929292",
    black: "#333",
    red: "#ef5e5e"
  },
  colorVarients: {
    default: "#ddd",
    primary: "#06B49A",
    warning: "",
    error: "#ef5e5e"
  },
  sizeVarients: {
    small: "24px",
    default: "32px",
    normal: "40px",
    large: "48px"
  },
  fonts: ["Montserrat", "sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

export default appTheme;
