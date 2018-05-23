import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { values } from 'lodash';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Loading from '../Loading';
import Message from '../Message';

import styles from './styles';

export class CurrencySelector extends Component {

  static propTypes = {
    currencies: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isFavourite: PropTypes.bool.isRequired,
      countries: PropTypes.arrayOf(PropTypes.string).isRequired,
      rate: PropTypes.number
    })).isRequired,
    isLoading: PropTypes.bool.isRequired,
    onToggleCurrency: PropTypes.func.isRequired
  }

  static defaultProps = {
    currencies: {},
    isLoading: false,
    onToggleCurrency: () => {}
  }

  render() {
    const { classes, currencies, isLoading } = this.props;
    const currenciesList = values(currencies);

    return (
      <div className={ classes.root }>
        { isLoading ? (
          <Loading visible />
        ) : currenciesList.length ? (
          <List>
            { currenciesList.map(currency => (
              <ListItem button key={ currency.id } onClick={ this.handleToggleCurrency(currency) } >
                <ListItemAvatar className={ classes.avatar }>
                  <Avatar className={ classes.avatar }>
                    { currency.code }
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={ currency.title }
                  secondary={ currency.countries.join(', ') }
                />
                <ListItemSecondaryAction>
                  <Checkbox
                    onChange={ this.handleToggleCurrency(currency) }
                    checked={ currency.isFavourite }
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        ) : (
          <div className={ classes.nodata } >
            <Message text='No currencies for this filter' />
          </div>
        )}
      </div>
    );
  }

  handleToggleCurrency = currency => {
    return () => this.props.onToggleCurrency(currency);
  }

}

export const CurrencySelectorStyled = withStyles(styles)(CurrencySelector);

export default CurrencySelectorStyled;
