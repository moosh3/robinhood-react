import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';

class OrderContainer extends Component {
  render() {
    return <Order {...this.props} />;
  }
};

function mapStateToProps(state) {
  const { authed, orderData, account } = state;

  return {
    authed,
    orderData,
    account,
  };
}

OrderContainer.propTypes = {
  authed: PropTypes.object.isRequired,
  orderData: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(EquityContainer);
