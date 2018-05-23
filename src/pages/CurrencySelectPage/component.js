import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CurrencySelector from '../../components/CurrencySelector';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import * as currenciesSelectors from '../../store/reducers/currencies';

import { toggleCurrency, filterCurrenciesRequested } from '../../store/actions';

import styles from './styles';

export class CurrencySelectPage extends Component {

  static propTypes = {
    currencies: PropTypes.objectOf(PropTypes.object).isRequired,
    filter: PropTypes.string,
    toggleCurrency: PropTypes.func.isRequired,
    filterCurrencies: PropTypes.func.isRequired
  }

  static defaultProps = {
    currencies: {},
    filter: '',
    toggleCurrency: () => {},
    filterCurrencies: () => {}
  }

  filterRef = null

  constructor() {
    super();

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    this.setState({ isOpen: true });
  }

  render() {
    const { classes, currencies, fullScreen, filter } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={ classes.root }>
        <Dialog
          open={ isOpen && !isEmpty(currencies) }
          fullScreen={ fullScreen }
          onEntered={ this.handleOpen }
          onClose={ this.handleClose }
          onExited={ this.handleRedirect }
        >
          <DialogTitle disableTypography >
            <Typography paragraph variant='title' >
              Select Currencies
            </Typography>
            <TextField
              autoFocus
              fullWidth
              label='Filter'
              type='search'
              placeholder='Currency title, code or country'
              value={ filter }
              inputRef={ ref => this.filterRef = ref }
              onChange={ this.handleFilter }
            />
          </DialogTitle>
          <DialogContent className={ classes.dialogContent }>
            <CurrencySelector
              currencies={ currencies }
              onToggleCurrency={ this.handleToggleCurrency }
              onFilter={ this.handleFilter }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  handleOpen = () => {
    this.filterRef.focus();
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  handleRedirect = () => {
    this.props.history.goBack();
  }

  handleToggleCurrency = currency => {
    this.props.toggleCurrency(currency);
  }

  handleFilter = ({ target: { value } }) => {
    this.props.filterCurrencies(value);
  }

}

export const CurrencySelectPageStyled = withMobileDialog({ breakpoint: 'xs' })(withStyles(styles)(CurrencySelectPage));

function mapStateToProps(state) {
  const { getFilteredCurrencies, getFilter } = currenciesSelectors;
  return {
    currencies: getFilteredCurrencies(state),
    filter: getFilter(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCurrency: currency => dispatch(toggleCurrency(currency)),
    filterCurrencies: term => dispatch(filterCurrenciesRequested(term))
  };
}

export const CurrencySelectPageConnected = connect(mapStateToProps, mapDispatchToProps)(CurrencySelectPageStyled)

export default withRouter(CurrencySelectPageConnected);
