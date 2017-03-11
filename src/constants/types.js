import { createAction } from 'redux-actions';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const loginAttempt = createAction(LOGIN_ATTEMPT, credentials => credentials);

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = createAction(LOGIN_FAILURE, error => error);

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS, authToken => authToken);

export const QUOTE_ATTEMPT = 'QUOTE_ATTEMPT';
export const quoteAttempt = createAction(QUOTE_ATTEMPT, stock => stock);

export const QUOTE_FAILURE = 'QUOTE_FAILURE';
export const quoteFailure = createAction(QUOTE_FAILURE, error => error);

export const QUOTE_SUCCESS = 'QUOTE_SUCCESS';
export const quoteSuccess = createAction(QUOTE_SUCCESS, stock => stock);
