import React from "react";
import Router from "./pages/router";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./assets/style/GlobalStyle";
import theme from "./assets/style/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
