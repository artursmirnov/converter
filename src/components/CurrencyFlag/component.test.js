import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { CurrencyFlagStyled } from './component';

it('renders without crashing', () => {
  shallow(<CurrencyFlagStyled />);
});
