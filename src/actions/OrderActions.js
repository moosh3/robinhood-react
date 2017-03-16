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

export function placeOrder(authToken, order) {
  return { type: types.PLACE_ORDER, order };
}

export function placeBuyOrder(authToken, order) {
  return { type: types.PLACE_BUY_ORDER, order };
}

export function placeSellOrder(authToken, order) {
  return { type: types.PLACE_SELL_ORDER, order };
}

export function gatherRecentOrders(authToken) {
  return { type: types.GATHER_RECENT_ORDERS, authToken };
}

export function gatherOrderInfo(orderId, authToken) {
  return { type: types.GATHER_ORDER_INFO, orderId, authToken };
}

export function cancelOrder(authToken, order) {
  return { type: types.CANCEL_ORDER, order };
}

////////////////////////////////////////////////////////////////////////

export const backToOrderPlacementPane = () => {
    return {
        type: 'BACK_TO_ORDER_PLACEMENT_PANE'
    };
}
export const updateCurrentOrder = (options={}) => {
    return {
        type: 'UPDATE_CURRENT_ORDER',
        options
    };
}
export const resetCurrentOrder = (options={}) => {
    return {
        type: 'RESET_CURRENT_ORDER',
        options
    };
}
export function selectedOrderSide(fixedTitle, options={}) {
    return (dispatch) => {
        dispatch(resetCurrentOrder({
            type: options.stockType,
            symbol: options.symbol
        }));
        dispatch(initTitle(fixedTitle, options));
        return Promise.resolve()
    };
}
export function selectedOrderType(fixedTitle, options={}) {
    return (dispatch) => {
        dispatch(updateCurrentOrder({
            type: options.stockType,
        }));
        dispatch(backToOrderPlacementPane());
        return Promise.resolve()
    };
}
export function selectedOrderTypeWithPrice(fixedTitle, options={}) {
    let currentOrderOptions = {type: options.stockType};

    if (currentOrderOptions.type == 'stop loss') {
        currentOrderOptions.type = 'market';
        currentOrderOptions.trigger = 'stop';
    } else if (currentOrderOptions.type == 'stop limit') {
        currentOrderOptions.type = 'limit';
        currentOrderOptions.trigger = 'stop'
    }
    return (dispatch) => {
        dispatch(updateCurrentOrder(currentOrderOptions));
        dispatch(changeTitle(fixedTitle, options));
        return Promise.resolve()
    };
}
export function setOrderPrice(fixedTitle, options={}) {
    return (dispatch) => {
        dispatch(updateCurrentOrder({
            price: options.price,
        }));
        dispatch(changeTitle(fixedTitle, options));
        return Promise.resolve()
    };
}
export function selectedTimeInForce(time_in_force) {
    return (dispatch) => {
        dispatch(updateCurrentOrder({
            time_in_force,
        }));
        dispatch(backToOrderPlacementPane());
        return Promise.resolve()
    };
}
