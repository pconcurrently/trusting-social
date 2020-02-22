import React from 'react';

import { StyledThemeSwitcher } from './ThemeSwitcher.styled';
import sunnyIcon from '../../images/sunny-icon.svg';
import nightIcon from '../../images/night-icon.svg';

interface IProps {
  onClick: () => void;
}

export const ThemeSwitcher = (props: IProps) => {
  const { onClick } = props;
  return (
    <StyledThemeSwitcher>
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={onClick}/>
        <div className="slider round">
          <img className="light-icon" src={sunnyIcon} alt="light"/>
          <img className="dark-icon" src={nightIcon} alt="dark"/>
        </div>
      </label>
    </StyledThemeSwitcher>
  );
};
