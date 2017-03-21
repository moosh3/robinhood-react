import _ from 'lodash';
import * as types from '../constants/ActionTypes';
import { newsUrl, topMoversUrl } from '../lib/utils';
// Get Popular Stocks	GET https://brokerage-static.s3.amazonaws.com/popular_stocks/data.json

// Get Top Movers on the S&P500	GET /midlands/movers/sp500/?direction=['up' or 'down']

/* ////////////////////////////////
//           Quote News         //
/////////////////////////////////*/

export function requestPosition(symbol) {
  return: {
    type: types.REQUEST_POSITION, symbol}
  ;
}

export function recievePosition(instrument, json) {
  return {
    type: types.RECIEVE_POSITION,
    data: json.data.children.map(child => child.data),
    instrument,
    recievedAt: Date.now(),
}

export function requestPositionError(bool) {
  return {
    type: types.REQUEST_POSITION_ERROR,
    error: bool,
  };
}

function fetchPosition(instrument) {
  return dispatch => {
    dispatch(requestPosition(instrument)); // Show loading spinner

    return fetch(newsUrl(instrument))
      .then(response => response.json())
      .then(json => {
        dispatch(recievePosition(symbol, json));
      })
      .then(checkStatus)
      .catch(error => {
        dispatch(requestPositionError(true))
      })
  };
}

function shouldFetchPosition(instrument) {
  const positions = state.positions;
  if (!positions) {
    return true
  }
  if (positions.isFetching) {
    return false
  }
  return dispatch(fetchPosition(instrument));
}

export function fetchPositionsIfNeeded(instrument) {
  return (dispatch, getState) => {
    if (shouldFetchPosition(getState(), instrument)) {
      return dispatch(fetchPosition(instrument))
    }
  }
}
