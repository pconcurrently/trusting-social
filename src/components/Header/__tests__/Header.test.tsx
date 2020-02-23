import React from 'react';
import { mount, shallow } from 'enzyme';
import { Header } from '../Header';

describe('App', () => {
  const switchTheme = jest.fn();

  it('should render Header', () => {
    const container = shallow(<Header switchTheme={switchTheme} />);
    expect(container).toMatchSnapshot();
  });

  it('should fire switchTheme function', () => {
    const container = mount(<Header switchTheme={switchTheme} />);
    const event = { currentTarget: { checked: true } };
    expect(container.find('input#checkbox').props().checked).toBeFalsy();
    container.find('input#checkbox').simulate('change', event);
    expect(switchTheme).toBeCalled();
  });
});
