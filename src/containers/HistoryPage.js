import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import History from '../components/History';

const mapStateToProps = (state) => ({
  account: state.account,
  authed: state.authed,
})

const mapDispatchToProps = (dispatch) => ({
  fetchAccountIfNeeded: () => {
    dispatch(fetchAccountIfNeeded());
  }
})

const HistoryPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist)

export default HistoryPage;
