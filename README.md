# Robinhood React

This packages uses [Robinhoods API](https://github.com/sanko/Robinhood) allowing you to use Robinhood in your browser. Limited to (well designed!) mobile apps no more!

### Reference

Below is a quick reference to the code base, mainly to give structure to the flow of the actions -> reducers -> store

#### Actions

Authentication
```
- Login
- Logout
- loginSuccess
- authUser
- fetchAuthedUser
  - Equity Data
    - fetchShares
    - fetchEquityValue
    - fetchTotalReturn
    - fetchTodaysReturn
    - fetchAverageCost
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

Quote Actions
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
