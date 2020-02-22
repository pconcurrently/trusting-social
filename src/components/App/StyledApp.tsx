import React from 'react';
import styled from 'styled-components';
import backgroundImage from './background.jpeg';

export const StyledApp = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 100vh;
`;