import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      powderWhite: string;
      persianGreen: string;
      defaultWhite: string;
      lightBlue: string;
      onyx: string;
      gray: string;
      lighterGray: string;
      black: string;
      red: string;
    };
    colorVarients: {
      [key: string]: string;
      default: string;
      primary: string;
      warning: string;
      error: string;
    };
    sizeVarients: {
      [key: string]: string;
      small: string;
      default: string;
      normal: string;
      large: string;
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
