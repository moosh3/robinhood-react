import * as types from '../constants/ActionTypes';
import initialState from './initialState';

const positions = (state = {}, action) => {
    switch (action.type) {
        case types.INVALIDATE_POSITIONS:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case types.REQUEST_POSITIONS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case types.RECEIVE_POSITIONS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: action.receivedAt,
                items: action.positions
            });
        default:
            return state
    }
}

export default positions;
