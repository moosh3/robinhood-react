import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Account';

class NavContainer extends Component {
  render() {
    return <Nav {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed } = state;

  return {
    authed,
  };
}

export default connect(mapStateToProps)(NavContainer);
