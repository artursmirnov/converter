import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AmountNumberFormat } from './component';

it('renders without crashing', () => {
  shallow(<AmountNumberFormat inputRef={ () => {} } />);
});
