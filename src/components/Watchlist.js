import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { fetchWatchlistIfNeeded } from '../actions/watchlistActions';

class Watchlist extends Component {
  componentWillMount() {
    if (!this.props.watchlist.lastUpdated) {
      this.props.fetchWatchlistIfNeeded();
    }
  }

  render() {
    const { authed, watchlist } = this.props;

    if (authed.true) {
      return (
        //TODO
      )
    }
  }
}

Watchlist.propTypes = {
  authed: PropTypes.bool,
  watchlist: PropTypes.object.isRequired,
}

export default Watchlist;
