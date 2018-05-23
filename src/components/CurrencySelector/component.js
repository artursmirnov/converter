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
    onToggleCurrency: PropTypes.func.isRequired
  }

  static defaultProps = {
    currencies: {},
    onToggleCurrency: () => {}
  }

  render() {
    const { classes, currencies } = this.props;

    return (
      <div className={ classes.root }>
        <List>
          { values(currencies).map(currency => (
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
      </div>
    );
  }

  handleToggleCurrency = currency => {
    return () => this.props.onToggleCurrency(currency);
  }

}

export const CurrencySelectorStyled = withStyles(styles)(CurrencySelector);

export default CurrencySelectorStyled;
