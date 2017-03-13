/* ////////////////////////////////
//        Authentication        //
/////////////////////////////////*/

export const POST_LOGIN = 'POST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const POST_LOGOUT = 'POST_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

/* ////////////////////////////////
//        Portfolio Data         //
/////////////////////////////////*/

export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
export const PORTFOLIO_SUCCESS = 'PORTFOLIO_SUCCESS';
export const PORTFOLIO_FAILURE = 'PORTFOLIO_FAILURE';

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
export const QUOTE_DATA_SUCCESS = 'QUOTE_DATA_SUCCESS';
export const QUOTE_DATA_FAILURE = 'QUOTE_DATA_FAILURE';

export const GET_NEWS = 'GET_NEWS';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_FAILURE = 'NEWS_FAILURE';

/* ////////////////////////////////
//        Placing Order         //
////////////////////////////////*/

export const POST_PLACE_ORDER = 'POST_PLACE_ORDER';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

export const POST_BUY_ORDER = 'POST_BUY_ORDER';
export const BUY_ORDER_SUCCESS = 'BUY_ORDER_SUCCESS';
export const BUY_ORDER_FAILURE = 'BUY_ORDER_FAILURE';

export const POST_SELL_ORDER = 'POST_SELL_ORDER';
export const SELL_ORDER_SUCCESS = 'SELL_ORDER_SUCCESS';
export const SELL_ORDER_FAILURE = 'SELL_ORDER_FAILURE';

export const POST_CANCEL_ORDER = 'POST_CANCEL_ORDER';
export const CANCEL_ORDER_SUCCESS = 'CANCEL_ORDER_SUCCESS';
export const CANCEL_ORDER_FAILURE = 'CANCEL_ORDER_FAILURE';

export const GATHER_ORDER_INFO = 'GATHER_ORDER_INFO';
export const GATHER_RECENT_ORDERS = 'GATHER_RECENT_ORDERS';

/* ////////////////////////////////
//        Watchlist Actions      //
////////////////////////////////*/

export const CREATE_WATCHLIST = 'CREATE_WATCHLIST';
export const GET_WATCHLISTS = 'GET_WATCHLISTS';
export const ADD_INSTRUMENT_TO_WATCHLIST = 'ADD_INSTRUMENT_TO_WATCHLIST';
export const DELETE_WATCHLIST_INSTRUMENT = 'DELETE_WATCHLIST_INSTRUMENT';
