/* ////////////////////////////////
//          Equity Data          //
/////////////////////////////////*/

export const GET_SHARES = 'GET_SHARES';
export const GET_EQUITY_VALUE = 'GET_EQUITY_VALUE';
export const GET_TOTAL_RETURN = 'GET_TOTAL_RETURN';
export const GET_TODAYS_RETURN = 'GET_TODAYS_RETURN';
export const GET_AVERAGE_COST = 'GET_AVERAGE_COST';

/* ////////////////////////////////
//        Portfolio Data         //
/////////////////////////////////*/

export const GET_PORTFOLIO = 'GET_PORTFOLIO';
export const ADJUSTED_EQUITY_PREVIOUS_CLOSE = 'ADJUSTED_EQUITY_PREVIOUS_CLOSE';
export const EQUITY = 'EQUITY';
export const EQUITY_PREVIOUS_CLOSE = 'EQUITY_PREVIOUS_CLOSE';
export const EXCESS_MARGIN = 'EXCESS_MARGIN';
export const EXTENDED_HOURS_EQUITY = 'EXTENDED_HOURS_EQUITY';
export const EXTENDED_HOURS_MARKET_VALUE = 'EXTENDED_HOURS_MARKET_VALUE';
export const LAST_CORE_EQUITY = 'LAST_CORE_EQUITY';
export const LAST_CORE_MARKET_VALUE = 'LAST_CORE_MARKET_VALUE';
export const MARKET_VALUE = 'MARKET_VALUE';
export const ORDER_HISTORY = 'ORDER_HISTORY';
export const DIVIDENDS = 'DIVIDENDS';

/* ////////////////////////////////
//        Positions Data         //
/////////////////////////////////*/

export const GET_POSTITIONS = 'GET_POSTITIONS';
export const GET_SECURITIES_OWNED = 'GET_SECURITIES_OWNED';

/* ////////////////////////////////
//        Robinhood Gold         //
/////////////////////////////////*/

export const GET_RG_VOLATILITY = 'GET_RG_VOLATILITY';
export const GET_RG_INITIAL_REQUIREMENTS = 'GET_RG_INITIAL_REQUIREMENTS';
export const GET_RG_MAINTENANCE = 'GET_RG_MAINTENANCE';

/* ////////////////////////////////
//  GET Data/Quote statistics   //
/////////////////////////////////*/

export const GET_QUOTE_DATA = 'GET_QUOTE_DATA';
export const GET_QUOTE = 'GET_QUOTE';
export const NEWS = 'NEWS';
export const ASK_PRICE = 'ASK_PRICE';
export const BID_PRICE = 'BID_PRICE';
export const BID_SIZE = 'BID_SIZE';
export const LAST_TRADE_PRICE = 'LAST_TRADE_PRICE';
export const PREVIOUS_CLOSE = 'PREVIOUS_CLOSE';
export const PREVIOUS_CLOSE_DATE = 'PREVIOUS_CLOSE_DATE';
export const ADJUSTED_PREVIOUS_CLOSE = 'ADJUSTED_PREVIOUS_CLOSE';
export const URL = 'URL';
export const OPEN_PRICE = 'OPEN_PRICE';
export const TODAYS_HIGH = 'TODAYS_HIGH';
export const TODAYS_LOW = 'TODAYS_LOW';
export const r52_WEEK_HIGH = '52_WEEK_HIGH';
export const r52_WEEK_LOW = '52_WEEK_LOW';
export const VOLUME = 'VOLUME';
export const AVERAGE_VOLUME = 'AVERAGE_VOLUME';
export const MARKET_CAP = 'MARKET_CAP';
export const PE_RATIO = 'PE_RATIO';
export const DIV_YIELD = 'DIV_YIELD';

/* ////////////////////////////////
//        Placing Order         //
////////////////////////////////*/

export const PLACE_ORDER = 'PLACE_ORDER';
export const PLACE_BUY_ORDER = 'PLACE_BUY_ORDER';
export const PLACE_SELL_ORDER = 'PLACE_SELL_ORDER';
export const GATHER_RECENT_ORDERS = 'GATHER_RECENT_ORDERS';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const GATHER_ORDER_INFO = 'GATHER_ORDER_INFO';

/* ////////////////////////////////
//        Watchlist Actions      //
////////////////////////////////*/
export const CREATE_WATCHLIST = 'CREATE_WATCHLIST';
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
export const GET_WATCHLISTS = 'GET_WATCHLISTS';
/*
- *Needs authToken*
- URI: api.robinhood.com/watchlists/
- Method: GET
-
*/
export const ADD_INSTRUMENT_TO_WATCHLIST = 'ADD_INSTRUMENT_TO_WATCHLIST';
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
export const DELETE_WATCHLIST_INSTRUMENT = 'DELETE_WATCHLIST_INSTRUMENT';
/*
- *Needs authToken*
- URI: api.robinhood.com/watchlists/{watchlistName}/{instrumentId}/
- Method: DELETE
-
*/
