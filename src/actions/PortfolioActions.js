import * as types from '../constants/ActionTypes';
import { checkStatus } from '../shared/Utils';

/* ////////////////////////////////
//        Portfolio Actions      //
////////////////////////////////*/
/*
  - *Needs authToken*
  - URI: api.robinhood.com/portfolios/
  - Sample Response:
    {
    "results": [
        {
            "account": "https://api.robinhood.com/accounts/{accountId}/",
            "adjusted_equity_previous_close": "2088.3700",
            "equity": "2054.9574",
            "equity_previous_close": "1566.3700",
            "excess_maintenance": "1325.3456",
            "excess_maintenance_with_uncleared_deposits": "1392.3456",
            "excess_margin": "662.7337",
            "excess_margin_with_uncleared_deposits": "729.7337",
            "extended_hours_equity": null,
            "extended_hours_market_value": null,
            "last_core_equity": "2054.9574",
            "last_core_market_value": "2650.4474",
            "market_value": "2650.4474",
            "start_date": "2015-08-27",
            "unwithdrawable_deposits": "0.0000",
            "unwithdrawable_grants": "0.0000",
            "url": "https://api.robinhood.com/portfolios/5QT32045/",
            "withdrawable_amount": "0.0000"
        }
    ]
  }
*/

export function requestPortfolio(authToken) {
  return {
    type: types.REQUEST_PORTFOLIO,
    authToken
    recievedAt: Date.now()
  };
}

export function recievePortfolio(response) {
  return {
    type: types.RECIEVE_PORTFOLIO,
    response,
    recievedAt: Date.now()
  };
}

function fetchPortfolio(authToken) {
  let url = apiUrl + endpoints[portfolio];
  return dispatch => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${authToken}`
      },
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(dispatch(recievePortfolio()))
    .then(return response.json())
  };
}

function shouldFetchPortfolio(state, authToken) {
  const portfolio = state.portfolio;
  if (!portfolio) {
    return true;
  }
  if (portfolio.isFetching) {
    return false;
  }
  return true;
}

export function fetchPortfolioIfNeeded(authToken) {
  return (dispatch, getState) => {
    if (shouldFetchPortfolio(getState(), authToken)) {
      return dispatch(fetchPortfolio(authToken))
    }
  }
}

/* ////////////////////////////////
//        Positions Actions      //
////////////////////////////////*/
/*
  - *Needs authToken*
  - URI: api.robinhood.com/acount/{accountId}/positions/
  - Method: GET
  - Sample Response:
    {
      "next": null,
      "previous": null,
      "results": [
          {
              "account": "https://api.robinhood.com/accounts/{accountId}/",
              "average_buy_price": "47.7500",
              "created_at": "2017-03-14T15:38:58.448364Z",
              "instrument": "https://api.robinhood.com/instruments/bd444de7-b34a-4685-ab58-63e808f4fa16/",
              "intraday_average_buy_price": "47.7500",
              "intraday_quantity": "13.0000",
              "quantity": "13.0000",
              "shares_held_for_buys": "0.0000",
              "shares_held_for_sells": "0.0000",
              "updated_at": "2017-03-14T16:12:14.661447Z",
              "url": "https://api.robinhood.com/accounts/{accountID}/positions/bd444de7-b34a-4685-ab58-63e808f4fa16/"
          },
          {
              "account": "https://api.robinhood.com/accounts/{accountId}/",
              "average_buy_price": "53.2000",
              "created_at": "2017-03-13T21:48:08.819064Z",
              "instrument": "https://api.robinhood.com/instruments/5dc3bb24-007b-459d-be90-35905a8ba8f0/",
              "intraday_average_buy_price": "53.2000",
              "intraday_quantity": "5.0000",
              "quantity": "5.0000",
              "shares_held_for_buys": "0.0000",
              "shares_held_for_sells": "0.0000",
              "updated_at": "2017-03-14T13:01:31.881251Z",
              "url": "https://api.robinhood.com/accounts/{accountId}/positions/5dc3bb24-007b-459d-be90-35905a8ba8f0/"
          },
      ]
    }
*/

function requestPositions(authToken) {
  return: {
    type: types.REQUEST_POSITIONS,
    authToken
  };
}

function recievePositions(response) {
  return: {
    type: types.RECIEVE_POSITIONS,
    response,
    recievedAt: Date.now()
  };
}

function fetchPositions(authToken) {
  return dispatch => {
    dispatch(requestPositions(authToken))
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, */*',
        'Content-Type': 'application/json',
        'Authorization': `Token ${authToken}`
      })
      .then(response => response.json())
      .then(json => dispatch(recievePositions(json)))
  }
}

function shouldFetchPositions(state, authToken) {
  const positions = state.positions;
  if (!positions) {
    return true;
  }
  if (positions.isFetching) {
    return false;
  }
  return true;
}

export function fetchPositionsIfNeeded(authToken) {
  return (dispatch, getState) => {
    if (shouldFetchPositions(getState(), authToken)) {
      return dispatch(fetchPositions(authToken))
    }
  }
}
