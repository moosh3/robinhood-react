import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Watchlist from '../components/Watchlist';
import { fetchWatchlistsIfNeeded } from '../actions/watchlistActions';

const mapStateToProps = (state) => ({
  account: state.account,
  authed: state.authed,
  watchlists: state.account.watchlists,
})

const mapDispatchToProps = (dispatch) => ({
  fetchWatchlistsIfNeeded: () => {
    dispatch(fetchWatchlistsIfNeeded());
  }
})

const Watchlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist)

export default WatchlistPane;
