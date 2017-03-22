import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { fetchAccountIfNeeded } from '../actions/accountActions';

const mapStateToProps = (state) => ({
  account: state.account,
  authed: state.authed,
})

const mapDispatchToProps = (dispatch) => ({
  fetchAccountIfNeeded: () => {
    dispatch(fetchAccountIfNeeded());
  }
})

const AccountPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)

export default AccountPage;
