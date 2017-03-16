import React, { Component, PropTypes } from 'react';

class UserEquities extends Component {
  componentDidMount() {
    this.props.dispatch(
      loadUserEquities(this.props.userId)
    );
  }

  componentWillReceieveProps(nextProps) {
    if (nextProps.userId != this.props.userId) {
      this.props.dispatch(
        loadUserEquities(nextProps.userId)
      );
    }
  }

  render () {
    return (
      <p>{this.props.equities.join('AAPL')}</p>
    );
  }
}

Account.PropTypes = {
  authed: PropTypes.object.isRequired
}

export default UserEquities;
