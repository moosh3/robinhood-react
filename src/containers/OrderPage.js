import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OrderPane from '../components/Order';

const mapStateToProps = (state) = ({
  account: state.account,
  authed: state.authed,
  order: state.order,
})

const mapDispatchToProps = (dispatch) = ({
  placeOrder: () => {
    dispatch(placeOrder());
  }
})

const OrderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPane)

export default OrderContainer;
