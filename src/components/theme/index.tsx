import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import ThemeConfig from "components/theme/themeConfig";
import GlobalStyle from "./globalStyles";

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={ThemeConfig}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
