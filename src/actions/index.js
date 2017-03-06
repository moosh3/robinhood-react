// @flow

import { createAction } from 'redux-actions';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const loginAttempt = createAction(LOGIN_ATTEMPT, authToken => authToken);

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = createAction(LOGIN_FAILURE, error => error);

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS);
