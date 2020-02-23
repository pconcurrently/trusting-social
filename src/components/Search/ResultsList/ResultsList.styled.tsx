import styled from 'styled-components';

import { IApplicationTheme, devices } from '../../../shared/themes';

interface ITheme {
  theme: IApplicationTheme;
}

export const StyledResultsList = styled.div`
  width: 100%;
  position: relative;
  top: 60px;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    background-color: ${({ theme }: ITheme) => theme.BASE_BACKGROUND_ALT};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 4px 4px;

    li {
      list-style: none;
      height: 60px;
      width: 100%;
      font-size: 18px;
      line-height: 60px;
      display: inline-block;
      vertical-align: middle;
    }
  }
`;
