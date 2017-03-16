import React, { Component, PropTypes } from 'react';

class Dashboard extends Component {
  componentWillMount() {
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
    const { authed } = this.props;
    
    return (
      <p>{this.props.equities.join('AAPL')}</p>
    );
  }
}

Account.PropTypes = {
  authed: PropTypes.object.isRequired
}

export default Dasboard;
