import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Positions from '../components/Account';

class PositionsContainer extends Component {
  render() {
    return <Positions {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, account } = state;

  return {
    authed,
    account,
  };
}

PositionsContainer.propTypes = {
  authed: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(PositionsContainer);
