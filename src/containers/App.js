import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { initAuth } from '../actions/AuthedActions';
import { initEnvironment } from '../actions/EnvironmentActions';
import { initNavigator } from '../actions/NavigatorActions';

import NavContainer from '../containers/NavContainer';
import MeContainer from '../containers/MeContainer';
import ModalContainer from '../containers/ModalContainer';
import PlayerContainer from '../containers/PlayerContainer';
import SongContainer from '../containers/SongContainer';
import SongsContainer from '../containers/SongsContainer';
import UserContainer from '../containers/UserContainer';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
    dispatch(initAuth());
  }


  render() {
    const { height, isMobile, width } = this.props;
    
    return (
      <div>
        <NavContainer />
        {this.renderContent()}
        <PlayerContainer />
        <ModalContainer />
      </div>
    );
  }
}

App.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

function mapStateToProps(state) {
  const { quote, auth } = state;
  const { isAuthed, errorMessage } = auth;

  return {
    quote,
    isAuthed,
    errorMessage
  };
}

export default connect(mapStateToProps)(App);
