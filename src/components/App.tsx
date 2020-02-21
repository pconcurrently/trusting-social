import React from "react";
import styled, { ThemeProvider } from "styled-components";
import backgroundImage from "./background.jpeg";
import { Header } from '../components/Header';

import "./App.css";

const StyledApp = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 100vh;
`;

const darkTheme = {
  THEME: 'dark',
  PRIMARY: 'black',
};

const lightTheme = {
  THEME: 'light',
  PRIMARY: 'red',
};

const App = () => {
  const [theme, setTheme] = React.useState(darkTheme);

  const switchTheme = React.useCallback(() => {
    if (theme.THEME === 'dark')  {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [setTheme, theme]);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header switchTheme={switchTheme} />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
