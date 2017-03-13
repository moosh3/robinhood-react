import { args, apiUrl, endpoints } from './shared/Session';
import * as types from '../constants/ActionTypes';

/* ////////////////////////////////
//        Watchlist Actions      //
////////////////////////////////*/

export function createWatchlist(authToken, name) {
  /*
    - *Needs authToken*
    - URI api.robinhood.com/watchlists/
    - Fields = [
      - name
    ]
    - Sample response
      {
        "url": "https://api.robinhood.com/watchlists/Technology/",
        "user": "https://api.robinhood.com/user/",
        "name": "Technology"
      }
  */
  return {
    type: types.CREATE_WATCHLIST,
    name
  };
}

export function getWatchlists(authToken, watchlist) {
  /*
    - *Needs authToken*
    - URI: api.robinhood.com/watchlists/
    - Method: GET
    -
  */
  return {
    type: types.GET_WATCHLISTS,
    watchlists
  };
}

export function addBulkInstrumentWatchlist(authToken, symbol, watchlist) {
  /*
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
  */
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
  /*
  - *Needs authToken*
  - URI: api.robinhood.com/watchlists/{watchlistName}/{instrumentId}/
  - Method: DELETE
  -
  */
  return {
    type: types.DELETE_WATCHLIST_INSTRUMENT,
    watchlist
  };
}
