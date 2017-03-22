import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Watchlist from '../components/Watchlist';

class WatchlistContainer extends Component {
  render() {
    return <Watchlist {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, account } = state;

  return {
    authed,
    account,
  };
}

WatchlistContainer.propTypes = {
  authed: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(WatchlistContainer);
