import React from 'react';
import { shallow } from 'enzyme';
import debounce from 'lodash/debounce';
import { Search } from '../Search';

describe('Search', () => {
  const switchTheme = jest.fn();

  it('should render Search', () => {
    const container = shallow(<Search isDarkTheme={false} />);
    expect(container.debug()).toMatchSnapshot();
  });

  it('should render search-icon-light', () => {
    const container = shallow(<Search isDarkTheme={false} />);
    expect(container.find('img').prop('src')).toContain('search-icon-light');
  });

  it('should render search-icon-dark', () => {
    const container = shallow(<Search isDarkTheme={true} />);
    expect(container.find('img').prop('src')).toContain('search-icon-dark');
  });

  it('should fire deboucedHandleOnChange on onChange event', () => {
    const handleOnChange = jest.fn();
    const deboucedHandleOnChange = debounce(handleOnChange, 300);
    const event = { currentTarget: { value: 'random text' } };
    const container = shallow(<Search isDarkTheme={true} />);
    container.find('input').simulate('change', event);
    jest.useFakeTimers();
    setTimeout(() => {
      expect(deboucedHandleOnChange).toHaveBeenCalledTimes(1);
    }, 300);
    
  });
});
