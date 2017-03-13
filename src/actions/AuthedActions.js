import { apiUrl, endpoints } from '../constants/Robin';
import * as types from '../constants/ActionTypes';
import { checkStatus } from '../shared/Utils';

/* ////////////////////////////////
//        Authentication        //
/////////////////////////////////*/

const COOKIE_PATH = 'authToken';

export function postLogin(credentials) {
  return {type: types.POST_LOGIN, credentials};
}

export function loginSuccess(authToken) {
  return {type: types.LOGIN_SUCCESS};
}

export function loginFailure(error) {
  return {type: types.LOGIN_FAILURE};
}

// Helper functions

function loginHelper(credentials) {
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

function logoutHelper(error) {
  
}

function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(COOKIE_PATH);
    if (accessToken) {
      return dispatch(authUser(accessToken));
    }
    return null;
  };
}

function authUser(authToken) {
  return dispatch => {
    dispatch(fetchAuthedUser(authToken));
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
