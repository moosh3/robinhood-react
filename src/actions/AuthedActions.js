import { createAction } from 'redux-actions';
import { args, apiUrl, endpoints, rHeaders } from './shared/session';

/* ////////////////////////////////
//        Authentication        //
/////////////////////////////////*/

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
