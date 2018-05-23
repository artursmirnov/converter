import route from '../helpers/route';

import IndexPage from '../pages/IndexPage';
import CurrencyConverterPage from '../pages/CurrencyConverterPage';
import CurrencySelectPage from '../pages/CurrencySelectPage';

export const IndexRoute = route({
  path: '/',
  exact: true,
  component: IndexPage
})

export const CurrencyConverterRoute = route({
  path: '/currency',
  exact: false,
  component: CurrencyConverterPage
})

export const CurrencySelectRoute = route({
  path: '/currency/select',
  exact: true,
  component: CurrencySelectPage
})
