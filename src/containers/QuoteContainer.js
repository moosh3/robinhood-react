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
  const { authed, entities, environment, navigator, player, playlists } = state;
  const { songs, users } = entities;
  const { height } = environment;
  const { path } = navigator.route;
  const songId = Number(path[1]);

  const playingSongId = getPlayingSongId(player, playlists);

  return {
    authed,
    height,
    player,
    playingSongId,
    playlists,
    songId,
    songs,
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);
