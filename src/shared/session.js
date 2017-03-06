// @flow

export const apiUrl = 'https://api.robinhood.com/';
export const args = {
  method: 'GET',
  headers: robinHeaders,
}
export const apiRequest = new Request(apiUrl, args)
export const robinHeaders = new Headers({
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'en;q=1, fr;q=0.9, de;q=0.8, ja;q=0.7, nl;q=0.6, it;q=0.5',
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  'X-Robinhood-API-Version': '1.0.0',
  'Connection': 'keep-alive',
  'User-Agent': 'Robinhood/823 (iPhone; iOS 7.1.2; Scale/2.00)'
});
export const endpoints = {
  login: 'api-token-auth/',
  investment_profile: 'user/investment_profile/',
  accounts: 'accounts/',
  ach_iav_auth: 'ach/iav/auth/',
  ach_relationships: 'ach/relationships/',
  ach_transfers: 'ach/transfers/',
  ach_deposit_schedules: 'ach/deposit_schedules/',
  applications: 'applications/',
  dividends: 'dividends/',
  edocuments: 'documents/',
  instruments: 'instruments/',
  margin_upgrade: 'margin/upgrades/',
  markets: 'markets/',
  notifications: 'notifications/',
  notifications_devices: 'notifications/devices/',
  orders: 'orders/',
  cancel_order: 'orders/',
  password_reset: 'password_reset/request/',
  quotes: 'quotes/',
  document_requests: 'upload/document_requests/',
  user: 'user/',

  user_additional_info: 'user/additional_info/',
  user_basic_info: 'user/basic_info/',
  user_employment: 'user/employment/',
  user_investment_profile: 'user/investment_profile/',

  watchlists: 'watchlists/',
  positions: 'positions/',
  fundamentals: 'fundamentals/',
  sp500_up: 'midlands/movers/sp500/?direction=up',
  sp500_down: 'midlands/movers/sp500/?direction=down',
  news: 'midlands/news/'
};
