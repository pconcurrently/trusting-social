// eslint-disable jsx-a11y/anchor-is-valid
import React from 'react';

import { ThemeSwitcher } from '../ThemeSwitcher';
import { StyledHeader } from './Header.styled';

interface IProps {
  switchTheme: () => void;
}

export const Header: React.SFC<IProps> = ({ switchTheme }) => {
  return (
    <StyledHeader>
      <div></div>
      <ul>
        <li>
          <ThemeSwitcher onClick={switchTheme} />
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
