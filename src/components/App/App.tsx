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

export const App = () => {
  const [theme, setTheme] = React.useState(lightTheme);

  const switchTheme = React.useCallback(() => {
    if (theme.NAME === 'dark') {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [setTheme, theme]);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <StyledAppBackground>
          {theme.NAME === 'dark' && (
            <StyledDarkThemeOverlay></StyledDarkThemeOverlay>
          )}
        </StyledAppBackground>
        <Header switchTheme={switchTheme} />
        <Search />
      </StyledApp>
    </ThemeProvider>
  );
};
