import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { fetchCurrenciesRequested } from '../../store/actions';

import styles from './styles';

export class CurrencyConverterPage extends Component {

  static propTypes = {
    fetchCurrencies: PropTypes.func.isRequired
  }

  static defaultProps = {
    fetchCurrencies: () => {}
  }

  componentDidMount() {
    this.props.fetchCurrencies();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        CurrencyConverterPage
      </div>
    );
  }

}

export const CurrencyConverterPageStyled = withStyles(styles)(CurrencyConverterPage);

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencies: () => dispatch(fetchCurrenciesRequested())
  };
}

export const CurrencyConverterPageConnected = connect(mapStateToProps, mapDispatchToProps)(CurrencyConverterPageStyled)

export default CurrencyConverterPageConnected;
