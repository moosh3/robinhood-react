import { args, apiUrl, endpoints } from './shared/session';
import * as types from '../constants/ActionTypes';

/* ////////////////////////////////
//        Placing Order         //
////////////////////////////////*/
/*
- URI api.robinhood.com/orders/
- Fields = [
  - account
  - instrument
  - symbol
  - type
  - time_in_force
  - trigger
  - price
  - stop_price
  - quantity
  - side
  - client_id
]
- Response sample
  {
    "updated_at": "2016-04-01T21:24:13.698563Z",
    "executions": [],
    "time_in_force": "fok",
    "fees": "0.00",
    "cancel": "https://api.robinhood.com/orders/15390ade-face-caca-0987-9fdac5824701/cancel/",
    "id": "15390ade-face-caca-0987-9fdac5824701",
    "cumulative_quantity": "0.00000",
    "stop_price": null,
    "reject_reason": null,
    "instrument": "https://api.robinhood.com/instruments/50810c35-d215-4866-9758-0ada4ac79ffa/",
    "state": "queued",
    "trigger": "immediate",
    "type": "market",
    "last_transaction_at": "2016-04-01T23:34:54.237390Z",
    "price": null,
    "client_id": null,
    "account": "https://api.robinhood.com/accounts/8UD09348/",
    "url": "https://api.robinhood.com/orders/15390ade-face-caca-0987-9fdac5824701/",
    "created_at": "2016-04-01T22:12:14.890283Z",
    "side": "sell",
    "position": "https://api.robinhood.com/positions/8UD09348/50810c35-d215-4866-9758-0ada4ac79ffa/",
    "average_price": null,
    "quantity": "1.00000"
  }
*/

export function placeOrder(order) {
  return {type: types.PLACE_ORDER, order};
}

export function placeBuyOrder(order) {
  return {type: types.PLACE_BUY_ORDER, order};
}

export function placeSellOrder(order) {
  return {type: types.PLACE_SELL_ORDER, order};
}

export function gatherRecentOrders(authToken) {
  return {type: types.GATHER_RECENT_ORDERS, authToken};
}

export function gatherOrderInfo(order_id, authToken) {
  return {type: types.GATHER_ORDER_INFO, order_id, authToken};
}

export function cancelOrder(order) {
  return {type: types.CANCEL_ORDER, order};
}
