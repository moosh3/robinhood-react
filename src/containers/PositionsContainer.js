import React, { Component } from 'react';
import { connect } from 'react-redux';
import Positions from '../components/Account';

class PositionsContainer extends Component {
  render() {
    return <Positions {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, position } = state;

  return {
    authed,
    positions,
  };
}

export default connect(mapStateToProps)(AccountContainer);
