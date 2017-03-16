import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/AccountActions';

class OrderContainer extends Component {
  render() {
    return <Order {...this.props} />;
  }
};

OrderContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    orderData: state.order;
  };
}

export default connect(mapStateToProps)(EquityContainer);
