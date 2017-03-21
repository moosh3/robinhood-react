import React, { Component, PropTypes } from 'react';


class Account extends Component {

  componentWillMount() {
    if(!this.props.account.lastUpdated) {
      this.props.fetchAccountIfNeeded();
    }
  }

  render() {
    const { authed, account } = this.props;

    return (
      //TODO
    );
  }
}

Account.propTypes = {
  authed: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
}

export default Account;
