import React, { Component } from 'react';

import MuiNumberFormat from '../MuiNumberFormat';

const browserLocale = navigator.language || navigator.userLanguage || navigator.browserLanguage || '';
const IS_US = browserLocale.toLowerCase() === 'en-us';

export class AmountNumberFormat extends Component {

  render() {
    const { ...rest } = this.props;

    return (
      <MuiNumberFormat
        { ...rest }
        thousandSeparator={ IS_US ? ',' : ' ' }
        decimalSeparator={ IS_US ? '.' : ',' }
        decimalScale={2}
        allowNegative={ false }
        isNumericString={ true }
      />
    );
  }

}

export default AmountNumberFormat;
