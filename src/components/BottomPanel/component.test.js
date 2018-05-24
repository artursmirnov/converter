import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BottomPanelStyled } from './component';

it('renders without crashing', () => {
  shallow(<BottomPanelStyled />);
});
