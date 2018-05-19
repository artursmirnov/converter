import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class CurrencyConverterPage extends Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchCurrenciesRequested());
  }

  render() {
    return (
      <div>
        Currency Converter Page
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CurrencyConverterPage);
