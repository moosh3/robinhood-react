import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { formatCurrency, formatPercent } from '../lib/formaters';

class PositionList extends Component {

  componentWillMount() {
    this.props.dispatch(
      fetchPositionsIfNeeded();
    );
  }

  render() {
    const { positions, authed } = this.props;

    return (
      {(_.values(positions.items) || []).map((stock, i) => {
        const { quantity, quote, instrument } = stock;
        let displayedValue = formatCurrency(+quote.last_trade_price);

        switch(settings.displayedValue) {
          case 'price':
            displayedValue = formatCurrency(+quote.last_trade_price);
              break;
          case 'equity':
            displayedValue = formatCurrency(+quote.last_trade_price * +quantity);
              break;
          case 'percent':
            displayedValue = formatPercent((+quote.last_trade_price / +quote.adjusted_previous_close) - 1);
              break;
        }
    );
  }
}

Positions.propTypes = {
  authed: PropTypes.object.isRequired,
  positions: PropTypes.object.isRequired
}

export default PositionList;
