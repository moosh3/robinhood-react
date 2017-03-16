import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order';

class OrderContainer extends Component {
  render() {
    return <Order {...this.props} />;
  }
};

function mapStateToProps(state) {
  const { authed, orderData } = state;

  return {
    authed,
    orderData
  };
}

export default connect(mapStateToProps)(EquityContainer);
