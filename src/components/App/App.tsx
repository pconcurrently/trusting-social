import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  StyledApp,
  StyledAppBackground,
  StyledDarkThemeOverlay,
} from './App.styled';
import { Header } from '../Header';
import { Search } from '../Search';
import { lightTheme, darkTheme } from '../../shared/themes';

const LC_THEME = '__theme__';

export const App = () => {
  const [theme, setTheme] = React.useState(lightTheme);

  React.useEffect(() => {
    try {
      const theme = localStorage.getItem(LC_THEME);
      if (theme) {
        if (theme === "dark") {
          setTheme(darkTheme);
        } else {
          setTheme(lightTheme);
        }
      }
    } catch (err) {
      console.log(err);
    }
  },[]);

  const switchTheme = React.useCallback(() => {
    let themeToBeSet;
    if (theme.NAME === 'dark') {
      themeToBeSet = lightTheme;
    } else {
      themeToBeSet = darkTheme;
    }
    setTheme(themeToBeSet);
    try {
      localStorage.setItem(LC_THEME, themeToBeSet.NAME);
    } catch(err) {
      console.log(err);
    }
  }, [setTheme, theme]);

  const isDarkTheme = React.useMemo(() => theme.NAME === 'dark', [theme]); // This could be better done via React Context api

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <StyledAppBackground>
          {isDarkTheme && (
            <StyledDarkThemeOverlay></StyledDarkThemeOverlay>
          )}
        </StyledAppBackground>
        <Header switchTheme={switchTheme} isDarkTheme={isDarkTheme} />
        <Search isDarkTheme={isDarkTheme} />
      </StyledApp>
    </ThemeProvider>
  );
};
