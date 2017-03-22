import React, { Proptypes, Component } from 'react';
import { connect } from 'react-redux';
import History from '../components/History';

class HistoryPage extends Component {
  render() {
    return <History {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { authed, accountData } = state;

  return {
    authed,
    accountData,
  };
}

export default connect(mapStateToProps)(HistoryPage);
