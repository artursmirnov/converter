import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import currencyShape from '../../helpers/currencyShape';

import Paper from '@material-ui/core/Paper';
import ConverterGrid from '../../components/ConverterGrid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CurrencyFlag from '../CurrencyFlag';

import styles from './styles';

export class BaseCurrency extends Component {

  static propTypes = {
    currency: currencyShape(),
    onSelectBaseCurrency: PropTypes.func
  }

  static defaultProps = {
    onSelectBaseCurrency: () => {}
  }

  render() {
    const { classes, currency } = this.props;

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

}

export const BaseCurrencyStyled = withStyles(styles)(BaseCurrency);

export default BaseCurrencyStyled;
