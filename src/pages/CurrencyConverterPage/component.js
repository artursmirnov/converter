import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrencyConverterPage extends Component {

  componentDidMount() {
    fetch('/api/currencies');
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
