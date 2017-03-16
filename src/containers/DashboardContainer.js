import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/AccountActions';

class DashboardContainer extends Component {
  render() {
    return <Dashboard {...this.props} />;
  }
};

DashboardContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    apiData: state
  };
}

export default connect(mapStateToProps)(DashboardContainer);
