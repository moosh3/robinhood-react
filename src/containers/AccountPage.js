import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';

class AccountContainer extends Component {
  render() {
    return <Account {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { authed, data } = state;

  return {
    authed,
    accountData,
  };
}

AccountContainer.propTypes = {
  authed: PropTypes.object.isRequired,
  data: PropTypes.object,
}

export default connect(mapStateToProps)(AccountContainer);
