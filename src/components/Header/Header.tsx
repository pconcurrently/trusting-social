// eslint-disable jsx-a11y/anchor-is-valid
import React from 'react';

import { ThemeSwitcher } from '../ThemeSwitcher';
import { StyledHeader } from './Header.styled';
import airbnbLogo from '../../images/airbnb-logo.svg';

interface IProps {
  switchTheme: () => void;
  isDarkTheme: boolean;
}

export const Header: React.SFC<IProps> = ({ switchTheme, isDarkTheme }) => {
  return (
    <StyledHeader>
      <div className="logo-wrapper">
        <img src={airbnbLogo} alt="Logo"/>
      </div>
      <ul>
        <li>
          <ThemeSwitcher onClick={switchTheme} isDarkTheme={isDarkTheme} />
        </li>
        <li>
          <a href="#">Become a host</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Sign up</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </StyledHeader>
  );
};
