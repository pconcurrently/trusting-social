import React from 'react';
import { shallow } from 'enzyme';
import { ResultsList } from '../ResultsList';

describe('ResultsList', () => {
  const defaultResults = ['An Giang', 'Hà Nội'];

  it('should render ResultsList', () => {
    const container = shallow(<ResultsList results={defaultResults} />);
    expect(container.debug()).toMatchSnapshot();
  });

  it('should render 2 li', () => {
    const container = shallow(<ResultsList results={defaultResults} />);
    expect(container.find('li').length).toBe(2);
  });

  it('should render 3 li', () => {
    const results = ['An Giang', 'Hà Nội', 'Đà Nẵng', 'Vũng Tàu'];
    const container = shallow(<ResultsList results={results} />);
    expect(container.find('li').length).toBe(3);
  })
});
