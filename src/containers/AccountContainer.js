import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Component from ./components/Component

class AccountContainer extends Component {
  render() {
    return <Account {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { path } = navigator.route
  return {

  };
}

export default connect(mapStateToProps)(AccountContainer);
