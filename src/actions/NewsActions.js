import _ from 'lodash';
import * as types from '../constants/ActionTypes';
import { newsUrl, topMoversUrl } from '../lib/utils';
// Get Popular Stocks	GET https://brokerage-static.s3.amazonaws.com/popular_stocks/data.json

// Get Top Movers on the S&P500	GET /midlands/movers/sp500/?direction=['up' or 'down']

/* ////////////////////////////////
//           Quote News         //
/////////////////////////////////*/

export const requestNews = (symbol) => ({
  type: types.REQUEST_NEWS,
  symbol,
})

export const receieveNews = (instrument, json) => ({
  type: types.RECIEVE_NEWS,
  data: json.data.children.map(child => child.data),
  instrument,
  recievedAt: Date.now(),
})

export const requestNewsError = (bool) => ({
  type: types.REQUEST_NEWS_ERROR,
  error: bool,
})

function fetchNews(instrument) {
  return dispatch => {
    dispatch(requestNews(instrument)); // Show loading spinner

    return fetch(newsUrl(instrument))
      .then(response => response.json())
      .then(json => {
        dispatch(recieveQuote(symbol, json));
      })
      .then(checkStatus)
      .catch(error => {
        dispatch(quoteRequestError(true))
      })
  };
}

function shouledFetchNews(instrument) {
  const news = state.news;
  if (!news) {
    return true
  }
  if (news.isFetching) {
    return false
  }
  return dispatch(fetchNews(instrument));
}

export function fetchNewsIfNeeded(instrument) {
  return (dispatch, getState) => {
    if (shouledFetchNews(getState(), instrument)) {
      return dispatch(fetchNews(instrument))
    }
  }
}

/* ////////////////////////////////
//          Top movers          //
/////////////////////////////////*/

export const requestMovers = (direction) => ({
  type: types.REQUEST_MOVERS, direction,
})

export const recieveMovers = (direction, json) => ({
  type: types.RECIEVE_MOVERS,
  data: json.data.children.map(child => child.data),
  direction,
  recievedAt: Date.now(),
})

export const requestMoversError = (bool) => ({
  type: types.REQUEST_MOVERS_ERROR,
  error: bool,
})

function fetchNews(direction) {
  return dispatch => {
    dispatch(requestNews(instrument)); // Show loading spinner

    return fetch(moversUrl(direction))
      .then(response => response.json())
      .then(json => {
        dispatch(recieverMovers(symbol, json));
      })
      .then(checkStatus)
      .catch(error => {
        dispatch(moversRequestError(true))
      })
  };
}

function shouldFetchMovers(direction) {
  const movers = state.movers;
  if (!movers) {
    return true
  }
  if (movers.isFetching) {
    return false
  }
  return dispatch(fetchMovers(instrument));
}

export function fetchMoversIfNeeded(direction) {
  return (dispatch, getState) => {
    if (shouldFetchMovers(getState(), direction)) {
      return dispatch(fetchMovers(direction))
    }
  }
}
