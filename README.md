# Robinhood React

This packages uses [Robinhoods API](https://github.com/sanko/Robinhood) allowing you to use Robinhood in your browser. Limited to (well designed!) mobile apps no more!

### Reference

Below is a quick reference to the code base, mainly to give structure to the flow of the actions -> reducers -> store

## Project Structure

```
src/
    actions/
    components/
    containers/
    constants/
    reducers/
    server/
    shared/
    store/
    routes.js
    index.html
    index.js
webpack.config.js
```


```actions/``` contain all action creators. These are triggered by events and return an action object (or function, using thunk middleware) that will notify reducers there needs to be a change in the state

```components``` contains dumb components

```containers``` contains react components that serve as containers for multiple dumb components. This will connect React components to the Redux store. The ```connect``` method will map the state to props by subscribing to a store that has been passed through the components context and will tell the component to update whenever the state changes. ```connect``` can also map dispatch to props by connecting action creators to and to the store dispatch method allowing the props to be invoked directly (rather than ```store.dispatch({type: 'MY_ACTION', id: 1})```).

```reducers``` hold functions that take the current state and an action type and return a new state with the changes

```store``` allows for the definition of a custom redux store to insert middleware, in this instance ```thunk```.

### Actions

Authentication
```
- postLogin
- loginSuccess
- loginFailure
- loginHelper
- initAuth
- authUser
- fetchAuthedUser
- Robinhood Gold
- fetchVolatility
- fetchInitialRequirements
- fetchMaintenance
- Portfolio Data
- fetchPortfolio
```

User Actions
```
- fetchUserData
- fetchUserIfNeeded
- fetchUser
```

Quote Actions
```
- fetchQuoteData
- quoteData
- fetchNews
- fetchAskPrice
- fetchBidPrice
- fetchBidSize
- fetchLastTradePrice
- fetchPreviousClose
- fetchPreviousCloseDate
- fetchAdjustedPreviousClose
- fetchURL
  - Quote statistics (?)
    - fetchOpenPrice
    - fetchTodaysHigh
    - fetchTodaysLow
    - fetchYtdHigh
    - fetchYtdLow
    - fetchVolume
    - fetchAverageVolume
    - fetchMarketCap
    - fetchPERatio
    - fetchDivYield
```

Order Actions
```
- placeOrder
- placeBuyOrder
- placeSellOrder
- gatherRecentOrders
- gatherOrderInfo
- cancelOrder
```

Watchlist Actions
```
- createWatchlist
- getWatchlists
- addBulkInstrumentWatchlist
- deleteWatchlistInstrument
```

### Reducers
