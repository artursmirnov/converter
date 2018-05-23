import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { CurrencySelectPageStyled } from './component';

it('renders without crashing', () => {
  shallow(<CurrencySelectPageStyled />);
});
