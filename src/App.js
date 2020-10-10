import React from "react";
import Router from "./pages/router";
import { GlobalStyle } from "./assets/style/GlobalStyle";

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;
