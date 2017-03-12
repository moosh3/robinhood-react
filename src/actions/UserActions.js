import { args, apiUrl, endpoints } from './shared/Session';
import * as types from '../constants/ActionTypes';
import { songSchema } from '../constants/Schemas';
import { constructUserUrl } from '../shared/Utils'

function fetchUserData(authToken) {
  return dispatch => {
    dispatch(fetchUserWatchlists(authToken));
    dispatch(fetchUserPortfolio(authToken));
    dispatch(fetchUserPositions(authToken));
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

function fetchUserData(authToken) {
  return dispatch => {
    dispatch(requestUser(authToken);
    return fetch(constructUserUrl(authToken))
      .then(res => res.json())
      .then(res => {
        const normalized = normalize(res, userSchema);
        dispatch(receiveUserPre(authToken, nomralized.entities))
      })
      .catch(err => { throw err; });
    };
}

function
