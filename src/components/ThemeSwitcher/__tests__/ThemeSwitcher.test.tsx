import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeSwitcher } from '../ThemeSwitcher';

describe('App', () => {
  const onClick = jest.fn();

  it('should render ThemeSwitcher', () => {
    const container = shallow(<ThemeSwitcher onClick={onClick} />);
    expect(container).toMatchSnapshot();
  });

  it('should fire onClick function', () => {
    const container = mount(<ThemeSwitcher onClick={onClick} />);
    const event = { currentTarget: { checked: true } };
    expect(container.find('input#checkbox').props().checked).toBeFalsy();
    container.find('input#checkbox').simulate('change', event);
    expect(onClick).toBeCalled();
  });
});
