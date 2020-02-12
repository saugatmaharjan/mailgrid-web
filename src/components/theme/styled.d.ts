import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      powderWhite: string;
      persianGreen: string;
      lightBlue: string;
      onyx: string;
      gray: string;
      lighterGray: string;
      black: string;
      red: string;
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
