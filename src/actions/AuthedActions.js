import * as types from '../constants/ActionTypes';
import { checkStatus } from '../shared/Utils';
import { fetchWatchlists } from './WatchlistActions';
import { fetchPortfolio, fetchPositions } from './PortfolioActions';
import { fetchAccountID, fetchAccountInfo } from './AccountActions';

/* ////////////////////////////////
//        Authentication        //
/////////////////////////////////*/
/*
fetchAuthedUser
- *Needs authToken*
- URI: https://api.robinhood.com/user/
- Sample response:
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

const COOKIE_PATH = 'authToken';

function authUser(authToken) {
  return dispatch =>
    dispatch(fetchAuthedUser(authToken));
}

function loginUser(credentials) {
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
      body: JSON.stringify({'username': {username}, 'password': {password}),
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(json[0] => dispatch(loginSuccessPre(authToken)))
  };
}

function loginSuccessPre(authToken) {
  return dispatch => {
    dispatch(authUser(authToken));
    dispatch(fetchAccountInfo(authToken));
    dispatch(fetchAccountID(authToken));
    dispatch(fetchWatchlists(authToken));
    dispatch(fetchPortfolio(authToken));
    dispatch(fetchPositions(authToken));
  }
}

function logoutUser() {
  return (dispatch, getState) => {
    Cookies.remove(COOKIE_PATH);
    const { authed } = getState();
    return dispatch(resetAuthed(authToken));
  }
}

function resetAuthed(authToken) {
  // Hits the logout endpoint
  return (dispatch, state) => {

  }
}

function initAuth() {
  return dispatch => {
    const authToken = Cookies.get(COOKIE_PATH);
    if (authToken) {
      return dispatch(authUser(authToken));
    }
    return null;
  };
}

function postLogin(credentials) {
  return {
    type: types.POST_LOGIN,
    credentials,
  };
}

function loginSuccess(authToken) {
  return {
    type: types.LOGIN_SUCCESS,
    authToken,
  };
}

function loginFailure(error) {
  return {
    type: types.LOGIN_FAILURE,
    error,
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
    equity,
  };
}

function fetchMaintenance(equity) {
  return {
    type: types.FETCH_RG_MAINTENANCE,
    equity
  };
  }
