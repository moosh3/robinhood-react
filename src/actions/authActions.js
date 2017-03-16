import { apiUrl, endpoints } from '../constants/Robin';
import * as types from '../constants/ActionTypes';
import { checkStatus, constructAccountIdUrl, constructAccountInfoUrl } from '../shared/Utils';

function requestLogin(creds) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(json) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    authToken: json.token
  }
}

function loginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('https://api.robinhood.com/api-token-auth/', config)
      .then(response => response.json())
      .then(if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(loginError(response.message))
      } else {
        // If login was successful, set the token in local storage
        localStorage.setItem('authToken', json.token);
        // Dispatch the success action
        dispatch(receiveLogin(user))
      }
    }).catch(error => console.log("Error: ", error))
  }
}

function requestLogout() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: types.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

...

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('authToken')
    dispatch(receiveLogout())
  }
}
