import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MessageStyled } from './component';

it('renders without crashing', () => {
  shallow(<MessageStyled />);
});
