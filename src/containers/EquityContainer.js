import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/AccountActions';

class EquityContainer extends Component {
  render() {
    return <Equity {...this.props} />;
  }
};

EquityContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    equityData: state. //TODO
  };
}

export default connect(mapStateToProps)(EquityContainer);
