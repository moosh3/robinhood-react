import { createAction } from 'redux-actions';
import { args, apiUrl, endpoints, rHeaders } from './shared/session';

authHeaders = rHeaders.append("Authorization:", "Token ${authToken}");


function authUser(authToken) {
  // Looking for 'user' in fetchAuthedUser request
  return dispatch => {
    dispatch(fetchAuthedUser(authToken));
  };
}

function fetchAuthedUser(authToken) {
  let url = apiUrl + endpoints[accounts]// User data
  return dispatch = {
    return fetch(url, {
      method: 'GET'
      headers = authHeaders
    })
    .then(response => response.json())
    .then(return response.json());
  }
}

function login(credentials) {
  let url = apiUrl + endpoints['login'];
  let form = new FormData(document.getElementById('login-form'));
  return dispatch => {
    dispatch(loginAttempt(credentials))
    return fetch(url, {
      method: 'POST',
      body: form
    })
    .then(response => response.json())
    .then(json[0] => dispatch(loginSuccess(authToken)))
  };
}
