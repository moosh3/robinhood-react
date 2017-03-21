import React, { Component } from 'react';
import { connect } from 'react-redux';
import Watchlist from '../components/Watchlist';

class WatchlistContainer extends Component {
  render() {
    return <Watchlist {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, watchlist } = state;

  return {
    authed,
    watchlist,
  };
}

export default connect(mapStateToProps)(WatchlistContainer);
