import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MuiNumberFormat } from './component';

it('renders without crashing', () => {
  shallow(<MuiNumberFormat inputRef={ () => {} } />);
});
