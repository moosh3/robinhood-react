/* eslint-disable import/prefer-default-export */

export const isProd = process.env.NODE_ENV === 'production';
export const API_URL = 'https://api.robinhood.com';

export function constructAccountIdUrl() {
  return `${API_URL}/user/id/`
}

export function constructAccountInfoUrl() {
  return `${API_URL}/user/basic_info/`
}

export function constructQuoteUrl(symbol) {
  return `${API_URL}/${symbol}/`;
}

export function constructWatchlistAddUrl(watchlist) {
  return `${API_URL}/${watchlist}/bulk_add/`;
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
