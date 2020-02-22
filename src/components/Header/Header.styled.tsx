import styled from 'styled-components';

import { IApplicationTheme } from '../../shared/themes';

interface ITheme {
  theme: IApplicationTheme;
}

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  z-index: 1;

  ul {
    display: table;
    height: 50px;
    margin: 0;

    li {
      display: table-cell;
      list-style: none;
      vertical-align: middle;
      border-bottom: solid 2px transparent;
      transition: 0.2s;

      &:hover:not(:first-child) {
        border-bottom: solid 2px #fff;
      }

      a {
        display: inline-block;
        text-decoration: none;
        height: 50px;
        line-height: 50px;
        padding: 0 8px;
        color: #fff;
      }
    }
  }
`;
