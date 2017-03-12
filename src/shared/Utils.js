/* eslint-disable import/prefer-default-export */
import { apiUrl, endpoints } from '../constants/Robin';

export const isProd = process.env.NODE_ENV === 'production';

export function constructUrl(symbol) {
  return `https://api.robinhood.com/quotes/${symbol}/`
}

export function constructWatchlistAddUrl(watchlist) {
  return `https://api.robinhood.com/watchlists/${watchlist}/bulk_add/`
}
