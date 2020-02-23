import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  50% { transform: translate(1px, -2px) rotate(1deg); }
  100% { transform: translate(1px, 1px) rotate(0deg); }
`;

export const StyledThemeSwitcher = styled.div`
  display: flex;
  align-items: center;

  .theme-switch {
    display: inline-block;
    height: 28px;
    position: relative;
    width: 60px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #555555;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: '';
    height: 20px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 20px;
  }

  img {
    height: 20px;
    position: absolute;
    top: 4px;

    &.light-icon {
      right: 4px;
      opacity: 1;
      transition: 0.4s;
      animation: ${spin} 4s linear infinite;
    }

    &.dark-icon {
      left: 4px;
      opacity: 0;
      transition: 0.4s;
      animation: ${shake} 2s linear infinite;
      fill: #FFF069;
    }
  }

  input:checked + .slider {
    background-color: #555555;
    img.light-icon {
      opacity: 0;
    }
    img.dark-icon {
      opacity: 1;
    }
  }

  input:checked + .slider:before {
    transform: translateX(32px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
