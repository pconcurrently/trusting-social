import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('App', () => {
  it('should render App', () => {
    const app = shallow(<App />);
    console.log(app.debug());
    expect(app).toMatchSnapshot();
  });

  it('should hide StyledDarkThemeOverlay', () => {
    const app = shallow(<App />);
    console.log(app.debug());
    expect(app.find('StyledDarkThemeOverlay').length).toBe(0);
  });
});
