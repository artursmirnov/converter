import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from './component';

it('renders without crashing', () => {
  shallow(<IndexPage />);
});
