import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';

export class MuiNumberFormat extends Component {

  static propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange: () => {}
  }

  render() {
    const { inputRef, onChange, ...other } = this.props;

    return (
      <NumberFormat
        {...other}
        ref={ inputRef }
        onValueChange={ values => {
          onChange({
            target: {
              value: values.value
            }
          });
        }}
      />
    );
  }

}

export default MuiNumberFormat;
