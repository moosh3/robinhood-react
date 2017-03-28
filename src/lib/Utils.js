/* eslint-disable import/prefer-default-export */

export const isProd = process.env.NODE_ENV === 'production';
export const API_URL = 'https://api.robinhood.com';

export const endpoints = {
  login: 'https://api.robinhood.com/api-token-auth/',
  investment_profile: 'https://api.robinhood.com/user/investment_profile/',
  accounts: 'https://api.robinhood.com/accounts/',
  ach_iav_auth: 'https://api.robinhood.com/ach/iav/auth/',
  ach_relationships: 'https://api.robinhood.com/ach/relationships/',
  ach_transfers: 'https://api.robinhood.com/ach/transfers/',
  applications: 'https://api.robinhood.com/applications/',
  dividends: 'https://api.robinhood.com/dividends/',
  edocuments: 'https://api.robinhood.com/documents/',
  instruments: 'https://api.robinhood.com/instruments/',
  margin_upgrade: 'https://api.robinhood.com/margin/upgrades/',
  markets: 'https://api.robinhood.com/markets/',
  notifications: 'https://api.robinhood.com/notifications/',
  orders: 'https://api.robinhood.com/orders/',
  password_reset: 'https://api.robinhood.com/password_reset/request/',
  quotes: 'https://api.robinhood.com/quotes/',
  document_requests: 'https://api.robinhood.com/upload/document_requests/',
  user: 'https://api.robinhood.com/user/',
  watchlists: 'https://api.robinhood.com/watchlists/',
  positions: 'https://api.robinhood.com/positions/',
  portfolios: 'https://api.robinhood.com/portfolios/',
  portfolioHistoricals: 'https://api.robinhood.com/portfolios/historicals/',
  symbolHistoricals: 'https://api.robinhood.com/quotes/historicals/',
  cards: 'https://api.robinhood.com/midlands/notifications/stack/',
  fundamentals: 'https://api.robinhood.com/fundamentals/',
  news: 'https://api.robinhood.com/midlands/news/',
  disclosures: 'https://brokerage-static.s3.amazonaws.com/disclosures/home_screen_disclosures.json'
}

export function newsCardsDelete(cardId) {
  return `${API_URL}/midlands/notifications/stack/${cardId}/dismiss/`;
}

export function positionUrl(accountNumber, instrumentId) {
  return `${API_URL}/positions/${accountNumber}/${instrumentId}/`;
}

export function newsUrl(direction) {
  return `${API_URL}/midlands/movers/sp500/?direction=${direction}`;
}

export function quoteUrl(symbol) {
  return `${API_URL}/${symbol}/`;
}

export function watchlistAddUrl(watchlist) {
  return `${API_URL}/${watchlist}/bulk_add/`;
}

export function newsUrl(instrument) {
  return `${API_URL}/midlands/news/${instrument}/`;
}

export function topMoversUrl(direction) {
  return `${API_URL}/midlands/movers/sp500/?direction=${direction}/`;
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
