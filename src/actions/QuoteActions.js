import { args, apiUrl, endpoints } from '../constants/Robin';
import * as types from '../constants/ActionTypes';
import { constructUrl, checkStatus } from '../shared/Utils';


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

export function getQuoteData(symbol) {
  return {type: GET_QUOTE_DATA, symbol};
}

export function quoteDataSuccess(response) {
  return {type: QUOTE_DATA_SUCCESS, response};
}

export function quoteDataFailure(error) {
  return {type: QUOTE_DATA_FAILURE, error};
}

function quoteDataHelper(symbol) {
  //type: types.GET_QUOTE_DATA,
  return dispatch => {
    fetch(constructUrl(symbol))
      .then(checkStatus)
      .then(res => res.json())
      .then(res => {
        const normalized = normalize(res, quoteData);
        dispatch(quoteDataSuccess(normalized.entities))
      }
  };
}

/* ////////////////////////////////
//        Quote fundamentals     //
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
