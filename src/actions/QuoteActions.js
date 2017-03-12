import { args, apiUrl, endpoints } from './shared/session';
import * as types from '../constants/ActionTypes';

/* ////////////////////////////////
//           GET Data          //
/////////////////////////////////*/

/*
- URI api.robinhood.com/quotes/{symbol}/
- Sample response
  {
    "ask_price": "54.2100",
    "ask_size": 2000,
    "bid_price": "54.2000",
    "bid_size": 1800,
    "last_trade_price": "54.1900",
    "last_extended_hours_trade_price": null,
    "previous_close": "54.6600",
    "adjusted_previous_close" : "54.6600",
    "previous_close_date": "2016-03-17",
    "symbol": "MSFT",
    "trading_halted": false,
    "updated_at": "2016-03-18T15:45:28Z"
  }
*/

function fetchQuoteData(symbol) {
  type: types.GET_QUOTE_DATA,
  let url = apiUrl + endpoints['quotes'] + symbol
  return dispatch => {
    dispatch(quoteAttempt(symbol))
    return fetch(url, args)
      .then(response => response.json())
      .then(json => dispatch(quoteSuccess(symbol)))
  };
}

export function quoteData() {
  return (dispatch, getState) => {
    type: types.GET_QUOTE,
    const { authed } = getState();
    dispatch(requestQuoteData(quotes));
    return fetch(quote)
      .then(response => response.json())
      .then (json => )
  };
}

export function fetchNews(symbol) {
  return {
    type: types.NEWS,
    news
  };
}

export function fetchAskPrice(symbol) {
  return {
    type: types.ASK_PRICE,
    askPrice
  };
}
export function fetchBidPrice(symbol) {
  return {
    type: types.BID_PRICE,
    bidPrice
  };
}
export function fetchBidSize(symbol) {
  return {
    type: types.BID_SIZE,
    news
  };
}

export function fetchLastTradePrice(symbol) {
  return {
    type: types.LAST_TRADE_PRICE,
    lastTradePrice
  };
}
export function fetchPreviousClose(symbol) {
  return {
    type: types.PREVIOUS_CLOSE,
    previousClose
  };
}
export function fetchPreviousCloseDate(symbol) {
  return {
    type: types.PREVIOUS_CLOSE_DATE,
    previousCloseDate
  };
}
export function fetchAdjustedPreviousClose(symbol) {
  return {
    type: types.ADJUSTED_PREVIOUS_CLOSE,
    adjustedPreviousClose
  };
}
export function fetchURL(symbol) {
  return {
    type: types.URL,
    url
  };
}

/* ////////////////////////////////
//        Quote statistics        //
/////////////////////////////////*/
/*
- URI api.robinhood.com/fundamentals/{symbol}/
- Sample response
  {
    "open": "63.9100",
    "high": "64.2800",
    "low": "63.6200",
    "volume": "8527495.0000",
    "average_volume": "27741172.4024",
    "high_52_weeks": "65.9100",
    "dividend_yield": "2.4287",
    "low_52_weeks": "48.0350",
    "market_cap": "496652500000.0000",
    "pe_ratio": "30.2971",
    "description": "Microsoft Corp. engages in the provision of developing and marketing software and hardware services. Its products include operating systems for computing devices, servers, phones and intelligent devices. It also offers server applications for distributed computing environments, productivity applications, business solution applications, desktop and server management tools, software development tools, video games, and online advertising. It operates through the following segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing. The Productivity and Business Processes segment consists of products and cloud services in portfolio of productivity, communication, and information services. It comprises of office commercial, office consumer, and microsoft dynamics business solutions. The Intelligent Cloud segment offers hybrid server products and cloud services. It comprises of server products and cloud services and enterprise services. The More Personal Computing segment comprises of windows, devices, gaming, and search advertising. The company was founded by William Henry Gates III in 1975 and is headquartered in Redmond, WA.",
    "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/"
  }
*/

export function fetchOpenPrice(symbol) {
  return {
    type: types.OPEN_PRICE,
    openPrice
  };
}

export function fetchTodaysHigh(symbol) {
  return {
    type: types.TODAYS_HIGH,
    todaysHigh
  };
}

export function fetchTodaysLow(symbol) {
  return {
    type: types.TODAYS_LOW,
    todaysLow
  };
}

export function fetchYtdHigh(symbol) {
  return {
    type: types.YTD_HIGH,
    ytdHigh
  };
}

export function fetchYtdLow(symbol) {
  return {
    type: types.YTD_LOW,
    ytdLow
  };
}

export function fetchVolume(symbol) {
  return {
    type: types.VOLUME,
    todaysVolume
  };
}

export function fetchAverageVolume(symbol) {
  return {
    type: types.AVERAGE_VOLUME,
    averageVolume
  };
}

export function fetchMarketCap(symbol) {
  return {
    type: types.MARKET_CAP,
    marketCap
  };
}

export function fetchPERatio(symbol) {
  return {
    type: types.PE_RATION,
    peRatio
  };
}

export function fetchDivYield(symbol) {
  return {
    type: types.DIV_YIELD,
    divYield
  };
}
