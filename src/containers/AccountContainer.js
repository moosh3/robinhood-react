import React, { Proptypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/AccountActions';
import Account from '../components/Account';

class AccountContainer extends Component {
  render() {
    return <Account {...this.props} />;
  }
}

AccountContainer.propTypes = {
  isLoading: propTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    accountData: state.accountData
  };
}

export default connect(mapStateToProps)(AccountContainer);
