import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Component from ./components/Component

class AccountContainer extends Component {
  render() {
    return <Account {...this.props} />;
  }
}

AccountContainer.propTypes = {
  isLoading: propTypes.object.isRequired,
}

function mapStateToProps(state) {
  const { path } = navigator.route;
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
