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

export const REQUEST_PORTFOLIO = 'REQUEST_PORTFOLIO';
export const RECIEVE_PORTFOLIO = 'PORTFOLIO_SUCCESS';

/* ////////////////////////////////
//        Positions Data         //
/////////////////////////////////*/

export const REQUEST_POSITIONS = 'REQUEST_POSITIONS';
export const RECIEVE_POSITIONS = 'RECIEVE_POSITIONS';

/* ////////////////////////////////
//        Watchlist Actions      //
////////////////////////////////*/

export const REQUEST_WATCHLISTS = 'REQUEST_WATCHLISTS';
export const RECIEVE_WATCHLISTS = 'RECIEVE_WATCHLISTS';
// CRUD actions 
export const CREATE_WATCHLIST = 'CREATE_WATCHLIST';
export const DELETE_WATCHLIST = 'DELETE_WATCHLIST';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const DELETE_FROM_WATCHLIST = 'DELETE_FROM_WATCHLIST';

/* ////////////////////////////////
//        Robinhood Gold         //
/////////////////////////////////*/

export const GET_RG_VOLATILITY = 'GET_RG_VOLATILITY';
export const GET_RG_INITIAL_REQUIREMENTS = 'GET_RG_INITIAL_REQUIREMENTS';
export const GET_RG_MAINTENANCE = 'GET_RG_MAINTENANCE';

/* ////////////////////////////////
//       Quote statistics        //
/////////////////////////////////*/

export const REQUEST_QUOTE = 'REQUEST_QUOTE';
export const RECIEVE_QUOTE = 'RECIEVE_QUOTE';

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
