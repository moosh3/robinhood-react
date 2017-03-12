import { apiUrl, endpoints } from '../constants/Robin';
import * as types from '../constants/ActionTypes';
import { checkStatus } from '../shared/Utils';

/* ////////////////////////////////
//        Authentication        //
/////////////////////////////////*/

const COOKIE_PATH = 'authToken';

export function login(credentials) {
  let url = apiUrl + endpoints['login'];
  let form = new FormData(document.getElementById('login-form'));
  return dispatch => {
    dispatch(loginAttempt(credentials))
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'username': {username}, 'password': {password})
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(json[0] => dispatch(loginSuccess(authToken)))
  };
}

function logout(_) {
  return {
    type: types.LOGOUT,
    _
  }
}

function loginSuccess(authToken) {
  type: types.LOGIN_SUCCESS,
  authToken
}

function authUser(authToken) {
  return dispatch => {
    dispatch(fetchAuthedUser(authToken));
  };
}

export function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(COOKIE_PATH);
    if (accessToken) {
      return dispatch(authUser(accessToken, false));
    }
    return null;
  };
}

function initInterval(accessToken) {
  return (dispatch, getState) => {
    streamInterval = setInterval(() => {
      const playlistKey = `stream${AUTHED_PLAYLIST_SUFFIX}`;
      const { playlists } = getState();
      const streamPlaylist = playlists[playlistKey];

      if (streamPlaylist.futureUrl) {
        dispatch(fetchNewStreamSongs(streamPlaylist.futureUrl, accessToken));
      } else {
        clearInterval(streamInterval);
      }
    }, 60000);
  };
}

function receiveAccessToken(accessToken) {
  return {
    type: types.RECEIVE_ACCESS_TOKEN,
    accessToken,
  };
}

function receiveAuthedUserPre(accessToken, user, shouldShowStream) {
  return dispatch => {
    dispatch(receiveAccessToken(accessToken));
    dispatch(receiveAuthedUser(user));
    dispatch(fetchLikes(accessToken));
    dispatch(fetchPlaylists(accessToken));
    dispatch(fetchStream(accessToken));
    dispatch(fetchFollowings(accessToken));
    if (shouldShowStream) {
      dispatch(navigateTo({ path: ['me', 'stream'] }));
    }
  };
}

function fetchAuthedUser(authToken) {
  /*
  Sample response:
    {
      "username": "superman",
      "first_name": "Clark",
      "last_name": "Kent",
      "id_info": "https://api.robinhood.com/user/id/",
      "url": "https://api.robinhood.com/user/",
      "basic_info": "https://api.robinhood.com/user/basic_info/",
      "email": "s@itmeanshope.com",
      "investment_profile": "https://api.robinhood.com/user/investment_profile/",
      "id": "11deface-face-face-face-defacedeface11",
      "international_info": "https://api.robinhood.com/user/international_info/",
      "employment": "https://api.robinhood.com/user/employment/",
      "additional_info": "https://api.robinhood.com/user/additional_info/"
    }
  */
  let url = apiUrl + endpoints[accounts]// User data
  return dispatch => {
    return fetch(url, {
      method: 'GET'
      headers = authHeaders
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(return response.json());
  }
}

/* ////////////////////////////////
//          Equity Data          //
/////////////////////////////////*/

function fetchShares(stock) {
  return {
    type: types.FETCH_SHARES,
    stock
  };
}

function fetchEquityValue(equity) {
  return {
    type: types.FETCH_EQUITY_VALUE,
    equity
  };
}

function fetchTotalReturn(equity) {
  return {
    type: types.FETCH_TOTAL_RETURN,
    equity
  }
}

function fetchTodaysReturn(equity) {
  return {
    type: types.FETCH_TODAYS_RETURN,
    equity
  }
}

function fetchAverageCost(equity) {
  return {
    type: types.FETCH_AVERAGE_COST,
    equity
  };
}

/* ////////////////////////////////
//        Robinhood Gold         //
/////////////////////////////////*/

function fetchVolatility(equity) {
  return {
    type: types.FETCH_RG_VOLATILITY,
    equity
  };
}

function fetchInitialRequirements(equity) {
  return {
    type: types.FETCH_RG_INITIAL_REQUIREMENTS,
    equity
  };
}

function fetchMaintenance(equity) {
  return {
    type: types.FETCH_RG_MAINTENANCE,
    equity
  };
}

/* ////////////////////////////////
//        Portfolio Data         //
/////////////////////////////////*/

function fetchPortfolio(authToken) {
  let url = apiUrl + endpoints[portfolio];
  return dispatch => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${authToken}`
      },
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(return response.json())
  };
}
