import React from 'react';
import { shallow } from 'enzyme';
import { AppStyled } from './component';

it('renders without crashing', () => {
  shallow(<AppStyled />);
});
