import styled from 'styled-components';
import backgroundImage from './background.jpeg';

export const StyledApp = styled.div`
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;

export const StyledAppBackground = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const StyledDarkThemeOverlay = styled.div`
  background-color: #000;
  opacity: 0.6;
  width: 100%;
  height: 100%;
`;
