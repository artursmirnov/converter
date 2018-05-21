import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LoadingStyled } from './component';

it('renders without crashing', () => {
  shallow(<LoadingStyled />);
});
