import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HeaderStyled } from './component';

it('renders without crashing', () => {
  shallow(<HeaderStyled pageTitle='Test Page' />);
});
