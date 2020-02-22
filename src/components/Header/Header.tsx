import React from 'react';
import styled from 'styled-components';

import { ThemeSwitcher } from '../ThemeSwitcher';
import { IApplicationTheme } from '../../shared/themes';
interface ITheme {
  theme: IApplicationTheme;
}

const StyledHeader = styled.header`
  height: 100px;
  font-weight: 600;
  font-size: 14px;

  ul {
    display: table;
    height: 50px;
    margin: 0;

    li {
      display: table-cell;
      list-style: none;
      vertical-align: middle;

      a {
        display: inline-block;
        text-decoration: none;
        height: 50px;
        line-height: 50px;
        padding: 0 8px;
        color: ${({ theme }: ITheme) => theme.BASE_TEXT};

        &:hover {
          border-bottom: solid 2px #fff;
        }
      }
    }
  }
`;

interface IProps {
  switchTheme: () => void;
}

export const Header: React.SFC<IProps> = ({ switchTheme }) => {
  return (
    <StyledHeader>
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
