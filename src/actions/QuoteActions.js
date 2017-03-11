import { args, apiUrl, endpoints } from './shared/session';


export function fetchQuoteData(quotes) {
  return (dispatch, getState) => {
    const { authed } = getState();
    dispatch(requestQuoteData(quotes));
    return fetch(quote)
      .then(response => response.json())
      .then (json => )
  }
}

function requestQuoteData(stock) {
  let url = apiUrl + endpoints['quotes'] + stock
  return dispatch => {
    dispatch(quoteAttempt(stock))
    return fetch(url, args)
      .then(response => response.json())
      .then(json => dispatch(quoteSuccess(stock)))
  }
}
