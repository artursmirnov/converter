import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { CurrencyConverterStyled } from './component';
import faker from 'faker';

const currencies = {
  [faker.finance.currencyCode()]: {
    id: faker.random.uuid(),
    code: faker.finance.currencyCode(),
    title: faker.finance.currencyName(),
    isFavourite: faker.random.boolean(),
    countries: [ faker.address.country() ],
    rate: faker.random.number()
  }
}

it('renders without crashing', () => {
  shallow(<CurrencyConverterStyled currencies={ currencies } />);
});
