import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import { initAuth } from '../actions/AuthedActions';

import NavContainer from './NavContainer';
import QuoteContainer from './QuoteContainer';
import PositionsContainer from './PositionsContainer';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch(initAuth()); TODO
  }


  render() {
    const { authed, dispatch, errorMessage } = this.props;

    return (
      <div>
        <NavContainer />
        <PositionsContainer />
        <QuoteContainer />
      </div>
    );
  }
}

App.propTypes = {
  authed: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

function mapStateToProps(state) {
  const { authed, dispatch, errorMessage } = state;

  return {
    authed,
    dispatch,
    errorMessage,
  };
}

export default connect(mapStateToProps)(App);
