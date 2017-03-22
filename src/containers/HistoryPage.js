import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import History from '../components/History';

class HistoryPage extends Component {
  render() {
    return <History {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { authed, data } = state;

  return {
    authed,
    accountData,
  };
}

export default connect(mapStateToProps)(HistoryPage);
