import { args, apiUrl, endpoints } from './shared/session';
import * as types from '../constants/ActionTypes';

/* ////////////////////////////////
//        Portfolio Data         //
/////////////////////////////////*/

function fetchPortfolio(authToken) {
  let url = apiUrl + endpoints[portfolio];
  return dispatch => {
    fetch(url, {
      method: 'GET',
      headers = authHeaders
    })
    .then(response => response.json())
    .then(return response.json())
  };
}
