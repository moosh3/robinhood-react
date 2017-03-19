/* eslint-disable import/prefer-default-export */

export const isProd = process.env.NODE_ENV === 'production';
export const API_URL = 'https://api.robinhood.com';

export const accountIdUrl => {
  return `${API_URL}/user/id/`;
}

export const accountInfoUrl => {
  return `${API_URL}/user/basic_info/`;
}

export const quoteUrl = symbol => {
  return `${API_URL}/${symbol}/`;
}

export const watchlistAddUrl = watchlist => {
  return `${API_URL}/${watchlist}/bulk_add/`;
}

export const newsUrl = instrument => {
  return `${API_URL}/midlands/news/${instrument}/`
}

export const topMoversUrl = direction => {
  return `${API_URL}/midlands/movers/sp500/?direction=${direction}/`

}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
