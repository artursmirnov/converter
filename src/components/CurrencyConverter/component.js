import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { values, isEmpty } from 'lodash';
import currencyShape from '../../helpers/currencyShape';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { DotsVertical } from 'mdi-material-ui';
import CurrencyFlag from '../CurrencyFlag';

import styles from './styles';

const numberFormatter = new Intl.NumberFormat(navigator.language || navigator.userLanguage, { maximumFractionDigits: 2 });

export class CurrencyConverter extends Component {

  static propTypes = {
    currencies: PropTypes.objectOf(currencyShape()).isRequired,
    baseCurrency: currencyShape(),
    onSetBaseCurrency: PropTypes.func,
    onRemoveFromList: PropTypes.func
  }

  static defaultProps = {
    onSetBaseCurrency: () => {},
    onRemoveFromList: () => {}
  }

  state = {
    menuAnchor: null,
    menuCurrency: null
  }

  render() {
    const { classes, currencies, baseCurrency = {} } = this.props;
    const { menuAnchor } = this.state;
    const isBaseCurrencySet = !isEmpty(baseCurrency);

    return (
      <div className={ classes.root }>
        <List >
          { values(currencies).map(currency => currency.code !== baseCurrency.code && (
            <Paper key={ currency.id } className={ classes.paper } elevation={0} >
              <ListItem >
                <CurrencyFlag countryCode={ currency.countryCode } />
                <ListItemText
                  primary={ currency.code }
                  secondary={ currency.title }
                />
                <ListItemSecondaryAction>
                  { isBaseCurrencySet &&
                    <Typography className={ classes.rate } variant='title' >
                      { numberFormatter.format(currency.calculatedRate) }
                    </Typography>
                  }
                  <IconButton onClick={ this.handleMenuOpenClick(currency) } >
                    <DotsVertical />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Paper>
          ))}
        </List>
        <Menu
          anchorEl={ menuAnchor }
          open={ !!menuAnchor }
          onClose={ this.handleMenuClose }
        >
          <MenuItem onClick={ this.handleSetBaseCurrency }>Use as a Base Currency</MenuItem>
          <MenuItem onClick={ this.handleRemoveFromList }>Remove from list</MenuItem>
        </Menu>
      </div>
    );
  }

  handleMenuOpenClick = (menuCurrency) => {
    return ({ target }) => this.setState({ menuAnchor: target, menuCurrency });
  }

  handleMenuClose = () => {
    this.setState({ menuAnchor: null, menuCurrency: null });
  }

  handleSetBaseCurrency = () => {
    this.props.onSetBaseCurrency(this.state.menuCurrency);
    this.handleMenuClose();
  }

  handleRemoveFromList = () => {
    this.props.onRemoveFromList(this.state.menuCurrency);
    this.handleMenuClose();
  }

}

export const CurrencyConverterStyled = withStyles(styles)(CurrencyConverter);

export default CurrencyConverterStyled;
