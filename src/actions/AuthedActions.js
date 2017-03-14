import { apiUrl, endpoints } from '../constants/Robin';
import * as types from '../constants/ActionTypes';
import { checkStatus } from '../shared/Utils';

/* ////////////////////////////////
//        Authentication        //
/////////////////////////////////*/

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
    dispatch(fetchAuthedUser(authToken));
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
    .then(dispatch(recievePortfolio()))
    .then(return response.json())
  };
}

/* ////////////////////////////////
//        Watchlist Actions      //
////////////////////////////////*/

export function createWatchlist(authToken, name) {
  /*
    - *Needs authToken*
    - URI api.robinhood.com/watchlists/
    - Fields = [
      - name
    ]
    - Sample response
      {
        "url": "https://api.robinhood.com/watchlists/Technology/",
        "user": "https://api.robinhood.com/user/",
        "name": "Technology"
      }
  */
  return {
    type: types.CREATE_WATCHLIST,
    name
  };
}

export function fetchWatchlists(authToken, watchlist) {
  /*
    - *Needs authToken*
    - URI: api.robinhood.com/watchlists/
    - Method: GET
    -
  */
  return {
    type: types.GET_WATCHLISTS,
    watchlists
  };
}

export function addBulkInstrumentWatchlist(authToken, symbol, watchlist) {
  /*
  - *Needs authToken*
  - URI: api.robinhood.com/watchlists/{watchlist}/bulk_add/
  - Method: POST
  - Fields = [
    - symbols
  ]
  - Sample response
    [{
        "watchlist": "https://api.robinhood.com/watchlists/Default/",
        "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
        "created_at": "2016-02-09T00:15:20.103927Z",
        "url": "https://api.robinhood.com/watchlists/Default/50810c35-d215-4866-9758-0ada4ac79ffa/"
    }, {
        "watchlist": "https://api.robinhood.com/watchlists/Default/",
        "instrument": "https://api.robinhood.com/instruments/6df56bd0-0bf2-44ab-8875-f94fd8526942/",
        "created_at": "2016-02-09T00:15:20.103927Z",
        "url": "https://api.robinhood.com/watchlists/Default/6df56bd0-0bf2-44ab-8875-f94fd8526942/"
    }]
  */
  return {
    fetch(constructWatchlistAddUrl(watchlist), {
        method: 'POST',
        headers: {
            'Accept': 'application/json, */*',
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
            },
        body: JSON.stringify({'symbols': {symbols})
        })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log('Fetch Error :-S', err))
    })
  };
}

export function deleteWatchlistInstrument(symbol, watchlist) {
  /*
  - *Needs authToken*
  - URI: api.robinhood.com/watchlists/{watchlistName}/{instrumentId}/
  - Method: DELETE
  -
  */
  return {
    type: types.DELETE_WATCHLIST_INSTRUMENT,
    watchlist
  };
}

/* ////////////////////////////////
//        Robinhood Gold         //
/////////////////////////////////*/

function fetchVolatility(equity) {
  return {type: types.FETCH_RG_VOLATILITY, equity};}

function fetchInitialRequirements(equity) {
  return {type: types.FETCH_RG_INITIAL_REQUIREMENTS, equity};}

function fetchMaintenance(equity) {
  return {type: types.FETCH_RG_MAINTENANCE, equity};}

export function postLogin(credentials) {
  return {type: types.POST_LOGIN, credentials};}

export function loginSuccess(authToken) {
  return {type: types.LOGIN_SUCCESS, authToken};}

export function loginFailure(error) {
  return {type: types.LOGIN_FAILURE, error};}

export function recievePortfolio(response) {
  return {type: types.RETRIEVE_PORTFOLIO, response;}
