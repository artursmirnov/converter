import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ConverterGridStyled } from './component';

it('renders without crashing', () => {
  shallow(<ConverterGridStyled />);
});
