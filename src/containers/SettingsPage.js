import React, { Component } from 'react';
import { connect } from 'react-redux';

class SettingsPage extends Component {
  render() {
    return //<Watchlist {...this.props} />; TODO
  }
}

function mapStateToProps(state) {
  const { authed, position } = state;

  return {
    authed,
    positions,
  };
}

export default connect(mapStateToProps)(SettingsPage);
