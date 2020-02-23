import styled from 'styled-components';

import { IApplicationTheme, devices } from '../../shared/themes';

interface ITheme {
  theme: IApplicationTheme;
}

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  z-index: 1;

  @media ${devices.tablet} {
    justify-content: space-between;
    flex-direction: row;
    font-size: 14px;
  }

  .logo-wrapper {
    img {
      width: 34px;
      height: 34px;
      margin: 23px auto;
      display: block;

      @media ${devices.tablet} {
        margin: 23px;
      }
    }
  }

  ul {
    display: table;
    height: 80px;
    margin: 0;
    padding: 0 4px;

    li {
      display: table-cell;
      list-style: none;
      vertical-align: middle;
      transition: 0.2s;

      &:hover:not(:first-child) {
        a {
          border-bottom: solid 2px #fff;
        }
      }

      a {
        display: inline-block;
        text-decoration: none;
        height: 50px;
        line-height: 50px;
        padding: 0;
        margin: 0;
        color: #fff;
        border-bottom: solid 2px transparent;

        @media ${devices.tablet} {
          padding: 0 9px;
          margin: 0 9px;
        }
      }
    }
  }
`;
