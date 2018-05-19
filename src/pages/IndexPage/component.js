import React from 'react';
import { Redirect } from 'react-router-dom';

import { CurrencyConverterRoute } from '../../config/routes';

export default () => (
  <Redirect to={ CurrencyConverterRoute.path } />
)

