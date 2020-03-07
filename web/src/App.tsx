import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import { store } from "./redux";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Main />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
