import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BaseCurrencyStyled } from './component';

it('renders without crashing', () => {
  shallow(<BaseCurrencyStyled />);
});
