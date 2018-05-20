import React from 'react';
import { shallow } from 'enzyme';
import App from './component';

it('renders without crashing', () => {
  shallow(<App />);
});
