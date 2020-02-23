import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('App', () => {
  it('should render App', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('should hide StyledDarkThemeOverlay', () => {
    const app = shallow(<App />);
    expect(app.find('StyledDarkThemeOverlay').length).toBe(0);
  });
});
