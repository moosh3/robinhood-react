import React, { Proptypes, Component } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';

class AccountContainer extends Component {
  render() {
    return <Account {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, accountData } = state;

  return {
    authed,
    accountData,
  };
}

export default connect(mapStateToProps)(AccountContainer);
