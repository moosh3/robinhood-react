import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class SettingsPage extends Component {
  render() {
    return //<Watchlist {...this.props} />; TODO
  }
}

function mapStateToProps(state) {
  const { authed, account } = state;

  return {
    authed,
    account,
  };
}

SettingsPage.propTypes = {
  authed: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(SettingsPage);
