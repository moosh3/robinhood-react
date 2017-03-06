// @flow

import credentials from './credentials';

export class Session {
  constructor(credentials) {
    this.credentials = credentials
  }

  let _url = 'https://api.robinhood.com/';

  let _options = opts || {},
    // Private API Endpoints
    _endpoints = {
      login:  'api-token-auth/',
      investment_profile: 'user/investment_profile/',
      accounts: 'accounts/',
      ach_iav_auth: 'ach/iav/auth/',
      ach_relationships:  'ach/relationships/',
      ach_transfers:'ach/transfers/',
      ach_deposit_schedules: "ach/deposit_schedules/",
      applications: 'applications/',
      dividends:  'dividends/',
      edocuments: 'documents/',
      instruments:  'instruments/',
      margin_upgrade:  'margin/upgrades/',
      markets:  'markets/',
      notifications:  'notifications/',
      notifications_devices: "notifications/devices/",
      orders: 'orders/',
      cancel_order: 'orders/',      //API expects https://api.robinhood.com/orders/{{orderId}}/cancel/
      password_reset: 'password_reset/request/',
      quotes: 'quotes/',
      document_requests:  'upload/document_requests/',
      user: 'user/',

      user_additional_info: "user/additional_info/",
      user_basic_info: "user/basic_info/",
      user_employment: "user/employment/",
      user_investment_profile: "user/investment_profile/",

      watchlists: 'watchlists/',
      positions: 'positions/',
      fundamentals: 'fundamentals/',
      sp500_up: 'midlands/movers/sp500/?direction=up',
      sp500_down: 'midlands/movers/sp500/?direction=down',
      news: 'midlands/news/'
  },
  _isInit = false,
  _request = request.defaults(),
  _private = {
    session : {},
    account: null,
    username : this.credentials.username,
    password : this.credentials.password,
    headers : null,
    auth_token : null
  },

  function _init() {
    _private.username = _options.username;
    _private.password = _options.password;
    _private.headers = {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'en;q=1, fr;q=0.9, de;q=0.8, ja;q=0.7, nl;q=0.6, it;q=0.5',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'X-Robinhood-API-Version': '1.0.0',
      'Connection': 'keep-alive',
      'User-Agent': 'Robinhood/823 (iPhone; iOS 7.1.2; Scale/2.00)'
    };
    _setHeaders();
    _login() {
      _isInit = true;

      if (callback) {
        callback.call();
      }
    };
  };

  function _setHeaders() {
    _request = request.default({
      headers: _private.headers,
      json: true,
      gzip: true
    });
  };

  function _login(callback) {
    _request.post({
      uri: _url + _endpoints.login,
      form: {
        password: _private.password,
        username: _private.username
      }
    }, function(error, response, body) {
      if (error) {
        throw (error);
      }

      _private.auth_token = body.token;
      _private.headers.Authorization = 'Token ' + _private.auth_token;

      _setHeaders();
    });
  }

  static investment_profile(callback) {
    return _request.get({
      uri: _url + _endpoints.investment_profile
    }, function(error, response, body) {
      if (error) {
        throw (error);
      }

    };
  };

  static quote_data(symbol, callback) {
    symbol = Array.isArray(symbol) ? symbol = symbol.join(',') : symbol;
    return _request.get({
      uri: _url + _endpoints.quotes,
      qs: { 'symbols': symbol.toUpperCase() }
    }, callback);
  };
}
