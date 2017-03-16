import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Equity from '../components/Equity';

class EquityContainer extends Component {
  render() {
    return <Equity {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, equityData } = store;

  return {
    authed,
    equityData
  };
}

export default connect(mapStateToProps)(EquityContainer);
