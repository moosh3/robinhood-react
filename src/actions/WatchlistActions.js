import { apiUrl, endpoints } from '../constants/Robin';
import * as types from '../constants/ActionTypes';
import { checkStatus } from '../shared/Utils';

/* ////////////////////////////////
//        Watchlist Actions      //
////////////////////////////////*/
/*
  - *Needs authToken*
  - URI: api.robinhood.com/watchlists/
  - Method: GET
  - Sample Response:
    {
        "next": null,
        "previous": null,
        "results": [
            {
                "name": "Default",
                "url": "https://api.robinhood.com/watchlists/Default/",
                "user": "https://api.robinhood.com/user/"
            }
        ]
    }

createWatchlist
  - *Needs authToken*
  - URI: api.robinhood.com/watchlists/
  - Method: POST
  - Fields = [
    - name
  ]
  - Sample response
    {
      "url": "https://api.robinhood.com/watchlists/Technology/",
      "user": "https://api.robinhood.com/user/",
      "name": "Technology"
    }

addBulkInstrumentWatchlist
  - *Needs authToken*
  - URI: api.robinhood.com/watchlists/{watchlist}/bulk_add/
  - Method: POST
  - Fields = [
    - symbols
  ]
  - Sample response
    [{
        "watchlist": "https://api.robinhood.com/watchlists/Default/",
        "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
        "created_at": "2016-02-09T00:15:20.103927Z",
        "url": "https://api.robinhood.com/watchlists/Default/50810c35-d215-4866-9758-0ada4ac79ffa/"
    }, {
        "watchlist": "https://api.robinhood.com/watchlists/Default/",
        "instrument": "https://api.robinhood.com/instruments/6df56bd0-0bf2-44ab-8875-f94fd8526942/",
        "created_at": "2016-02-09T00:15:20.103927Z",
        "url": "https://api.robinhood.com/watchlists/Default/6df56bd0-0bf2-44ab-8875-f94fd8526942/"
    }]

deleteWatchlistInstrument
  - *Needs authToken*
  - URI: api.robinhood.com/watchlists/{watchlistName}/{instrumentId}/
  - Method: DELETE
*/

export function requestWatchlists(authToken) {
  return {type: types.REQUEST_WATCHLISTS, authToken};
}

export function recieveWatchLists(response) {
  return {type: types.RECIEVE_WATCHLISTS, response}
}

export function fetchWatchlists(authToken, watchlist) {
  return {type: types.GET_WATCHLISTS, watchlists};
}

export function createWatchlist(authToken, name) {
  return {type: types.CREATE_WATCHLIST, name};
}

export function addBulkInstrumentWatchlist(authToken, symbol, watchlist) {
  return {
    fetch(constructWatchlistAddUrl(watchlist), {
        method: 'POST',
        headers: {
            'Accept': 'application/json, */*',
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
            },
        body: JSON.stringify({'symbols': {symbols})
        })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log('Fetch Error :-S', err))
    })
  };
}

export function deleteWatchlistInstrument(symbol, watchlist) {
  return {type: types.DELETE_WATCHLIST_INSTRUMENT, watchlist};
}
