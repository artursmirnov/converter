import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import currencyShape from '../../helpers/currencyShape';

import Paper from '@material-ui/core/Paper';
import ConverterGrid from '../../components/ConverterGrid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CurrencyFlag from '../CurrencyFlag';
import TextField from '@material-ui/core/TextField';
import AmountNumberFormat from '../AmountNumberFormat';

import config from '../../config/app';

import styles from './styles';

export class BaseCurrency extends Component {

  static propTypes = {
    currency: currencyShape(),
    amount: PropTypes.string,
    onSelectBaseCurrency: PropTypes.func,
    onAmountChange: PropTypes.func
  }

  static defaultProps = {
    amount: config.defaultAmount,
    onSelectBaseCurrency: () => {},
    onAmountChange: () => {}
  }

  render() {
    const { classes, currency, amount } = this.props;

    return (
      <div className={ classes.root }>
        <Paper square elevation={1} className={ classes.paper } >
          <ConverterGrid>
            <Paper className={ classes.listPaper } elevation={1} >
              <List className={ classes.list }>
                { currency ? (
                  <ListItem button onClick={ this.handleSelectBaseCurrencyClick } >
                    <CurrencyFlag countryCode={ currency.countryCode } />
                    <ListItemText primary={ currency.code } secondary={ currency.title } />
                    <ListItemSecondaryAction>
                      <TextField
                        autoFocus
                        label='Amount'
                        value={ amount }
                        className={ classes.amount }
                        InputProps={{
                          inputComponent: AmountNumberFormat,
                          inputProps: {
                            className: classes.amountInput,
                            onBlur: this.handleAmountBlur
                          }
                        }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.amountLabel
                        }}
                        onChange={ this.handleAmountChange }
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ) : (
                  <ListItem button onClick={ this.handleSelectBaseCurrencyClick } >
                    <CurrencyFlag />
                    <ListItemText primary='Click to select Base Currency' />
                  </ListItem>
                )}
              </List>
            </Paper>
          </ConverterGrid>
        </Paper>
      </div>
    );
  }

  handleSelectBaseCurrencyClick = () => {
    this.props.onSelectBaseCurrency();
  }

  handleAmountChange = ({ target: { value } }) => {
    this.props.onAmountChange(value);
  }

  handleAmountBlur = ({ target: { value } }) => {
    if (value === '') this.props.onAmountChange(config.defaultAmount);
  }

}

export const BaseCurrencyStyled = withStyles(styles)(BaseCurrency);

export default BaseCurrencyStyled;
