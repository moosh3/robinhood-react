import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PositionList from '../components/PositionList';
import { fetchPositionsIfNeeded } from '../actions/positionActions';

const mapStateToProps = (state) => ({
  account: state.account,
  authed: state.authed,
  positions: state.account.positions,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPositionsIfNeeded: () => {
    dispatch(fetchPositionsIfNeeded());
  }
})

const PositionsPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionList)

export default PositionsPane;
