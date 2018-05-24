import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { values } from 'lodash';
import currencyShape from '../../helpers/currencyShape';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { DotsVertical } from 'mdi-material-ui';

import styles from './styles';

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
    const { classes, currencies } = this.props;
    const { menuAnchor } = this.state;

    return (
      <div className={ classes.root }>
        <List >
          { values(currencies).map(currency => (
            <Paper key={ currency.id } className={ classes.paper } elevation={0} >
              <ListItem >
                <Avatar>{ currency.code }</Avatar>
                <ListItemText
                  primary={ currency.code }
                  secondary={ currency.title }
                />
                <ListItemSecondaryAction>
                  <Typography className={ classes.rate } variant='title' >
                    { currency.rate ? currency.rate.toFixed(2) : '--.--' }
                  </Typography>
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
