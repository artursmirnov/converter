import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LayoutStyled } from './component';

it('renders without crashing', () => {
  shallow(<LayoutStyled pageTitle='Test Page' />);
});
