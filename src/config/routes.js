import route from '../helpers/route';

import IndexPage from '../pages/IndexPage';
import CurrencyConverterPage from '../pages/CurrencyConverterPage';

export const IndexRoute = route({
  path: '/',
  exact: true,
  component: IndexPage
})

export const CurrencyConverterRoute = route({
  path: '/currency',
  exact: true,
  component: CurrencyConverterPage
})
