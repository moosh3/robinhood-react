import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import QuoteDetail from '../components/QuoteDetail';

class QuoteContainer extends Component {
  render() {
    return <QuoteDetail {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, quote, account } = state;

  return {
    authed,
    account,
    quote,
  };
}

QuoteContainer.propTypes = {
  authed: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  quote: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(QuoteContainer);
