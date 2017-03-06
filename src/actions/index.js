// @flow

import { createAction } from 'redux-actions';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const loginAttempt = createAction(LOGIN_ATTEMPT, authToken => authToken);

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = createAction(LOGIN_FAILURE, error => error);

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const QUOTE_ATTEMPT = 'QUOTE_ATTEMPT';
export const quoteAttempt = createAction(QUOTE_ATTEMPT, stock => stock);

export const QUOTE_FAILURE = 'QUOTE_FAILURE';
export const quoteFailure = createAction(QUOTE_FAILURE, error => error);

export const QUOTE_SUCCESS = 'QUOTE_SUCCESS';
export const quoteSuccess = createAction(QUOTE_SUCCESS, stock => stock);

const robinHeaders = new Headers({
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'en;q=1, fr;q=0.9, de;q=0.8, ja;q=0.7, nl;q=0.6, it;q=0.5',
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  'X-Robinhood-API-Version': '1.0.0',
  'Connection': 'keep-alive',
  'User-Agent': 'Robinhood/823 (iPhone; iOS 7.1.2; Scale/2.00)'
});

function fetchQuote(stock) {
  return dispatch => {
    dispatch(quoteAttempt(stock))
    return fetch(`http://api.robinhood.com/quotes/${stock}/`)
      .then(response => response.json())
      .then(json => dispatch(quoteSuccess(stock)))
  }
}
