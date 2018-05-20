import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ContentStyled } from './component';

it('renders without crashing', () => {
  shallow(<ContentStyled />);
});
