import React, { Component } from 'react';
import { connect } from 'react-redux';
import Song from '../components/Song';
import { getPlayingSongId } from '../utils/PlayerUtils';

class QuoteContainer extends Component {
  render() {
    return <Quote {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authed, dispatch, symbol } = state;

  return {
    authed,
    dispatch,
    symbol
  };
}



export default connect(mapStateToProps)(SongContainer);
