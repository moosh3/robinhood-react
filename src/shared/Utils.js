/* eslint-disable import/prefer-default-export */

export const isProd = process.env.NODE_ENV === 'production';

export function constructUrl(symbol) {
  return `https://api.robinhood.com/quotes/${symbol}/`;
}

export function constructWatchlistAddUrl(watchlist) {
  return `https://api.robinhood.com/watchlists/${watchlist}/bulk_add/`;
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response
    throw error
  }
}
