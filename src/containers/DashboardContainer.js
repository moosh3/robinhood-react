import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

class DashboardContainer extends Component {
  render() {
    return <Dashboard {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, apiData } = state;
  return {
    auth,
    apiData
  };
}

export default connect(mapStateToProps)(DashboardContainer);
