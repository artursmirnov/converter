import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { CurrencySelectorStyled } from './component';

it('renders without crashing', () => {
  shallow(<CurrencySelectorStyled />);
});
