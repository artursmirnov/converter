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

import * as currenciesSelectors from '../../store/reducers/currencies';

import { toggleCurrency } from '../../store/actions';

import styles from './styles';

export class CurrencySelectPage extends Component {

  static propTypes = {
    currencies: PropTypes.objectOf(PropTypes.object).isRequired,
    toggleCurrency: PropTypes.func.isRequired
  }

  static defaultProps = {
    currencies: {},
    toggleCurrency: () => {}
  }

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
    const { classes, currencies, fullScreen } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={ classes.root }>
        <Dialog
          open={ isOpen && !isEmpty(currencies) }
          fullScreen={ fullScreen }
          onClose={ this.handleClose }
          onExited={ this.handleRedirect }
        >
          <DialogTitle >Select Currencies</DialogTitle>
          <DialogContent className={ classes.dialogContent }>
            <CurrencySelector
              currencies={ currencies }
              onToggleCurrency={ this.handleToggleCurrency }
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

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  handleRedirect = () => {
    this.props.history.goBack();
  }

  handleToggleCurrency = currency => {
    this.props.toggleCurrency(currency);
  }

}

export const CurrencySelectPageStyled = withMobileDialog({ breakpoint: 'xs' })(withStyles(styles)(CurrencySelectPage));

function mapStateToProps(state) {
  const { getCurrencies } = currenciesSelectors;
  return {
    currencies: getCurrencies(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCurrency: currency => dispatch(toggleCurrency(currency))
  };
}

export const CurrencySelectPageConnected = connect(mapStateToProps, mapDispatchToProps)(CurrencySelectPageStyled)

export default withRouter(CurrencySelectPageConnected);
