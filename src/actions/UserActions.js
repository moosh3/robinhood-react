import { args, apiUrl, endpoints } from './shared/session';
import * as types from '../constants/ActionTypes';

function fetchUserData(authToken) {
  return dispatch => {
    dispatch(getWatchlists(authToken));
    ...
  }
}

export function fetchUserIfNeeded(authToken) {
  return (dispatch, getState) => {
    const { entities } = getState();
    const { user } = entities;
    if (!(authToken in user)) {
      return dispatch(fetchUser(authToken));
    } else if (!(*default watchlist exists*)) { // TODO
      return dispatch(fetchUserData)
    }

    return null;
  };
}

function fetchUser(authToken) {
  let url = apiUrl + 'user/id/'
  return dispatch =>
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const user = json[1];
      })
      .catch(err => { throw err; });
}
