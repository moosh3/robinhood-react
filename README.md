# Robinhood React

This packages uses [Robinhoods API](https://github.com/sanko/Robinhood) allowing you to use Robinhood in your browser. Limited to (well designed!) mobile apps no more!

Check out the [Trello board](https://trello.com/b/A6Kpou2w/robinhood-react) to stay up to date on the development!

## Requirements
* node `^7.0.0`  <-- probably works on older versions, but this is the only versions its been tested on
* yarn `^0.20.3`

## Getting Started

First, clone the project:

```bash
$ git clone https://github.com/aleccunningham/robinhood-react robinhood
$ cd robinhood
```
Then install dependencies and check to see it works. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install    # Install project dependencies
$ yarn start      # Compile and launch (same as `npm start`)
```

### Reference

Below is a quick reference to the code base, mainly to give structure to the flow of the actions -> reducers -> store

You can find the style guide for writing react components and their redux counterparts [in our wiki](https://github.com/aleccunningham/robinhood-react/wiki/Style-Guide).

## Helper packages

- [react-notie](https://github.com/vkbansal/react-notie)
- [title-decorator](https://github.com/gigobyte/react-document-title-decorator)
- [reselect](https://github.com/reactjs/reselect)
- [normalizr](https://github.com/paularmstrong/normalizr)
- [upup](https://github.com/TalAter/UpUp)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- babel
- react
- redux
- react-router
- webpack

## Project Structure

```
|-- .babelrc
|-- .eslintrc
|-- .eslintignore
|-- .gitignore
|-- .dockerignore
|-- .editorconfig
|-- Dockerfile
|-- README.md
|-- CHANGELOG.md
|-- LICENSE
|-- package.json
|-- yarn.lock
|-- client/
|    |-> index.js
|    |-> routes.js
|-- shared/
|  |-- actions/
|    |-- AccountActions.js
|    |-- AuthedActions.js
|    |-- NewsActions.js
|    |-- OrderActions.js
|    |-- PortfolioActions.js
|    |-- QuoteActions.js
|    |-- WatchlistActions.js
|  |-- components/
|    |-- Account.js
|    |-- Banner.js
|    |-- FilterSearch.js
|    |-- Footer.js
|    |-- Link.js
|    |-- Nav.js
|    |-- NavSearch.js
|    |-- Quote.js
|    |-- Row.js
|    |-- Table.js
|  |-- containers/
|    |-- AccountContainer.js
|    |-- App.js
|    |-- DashboardContainer.js
|    |-- LoginContainer.js
|    |-- NotFoundPage.js
|    |-- OrderContainer.js
|    |-- QuoteContainer.js
|    |-- Root.js
|  |-- constants/
|    |-- ActionTypes.js
|    |-- Config.js
|    |-- Schemas.js
|  |-- reducers/
|    |-- authentication.js
|    |-- order.js
|    |-- quote.js
|    |-- rootReducer.js
|    |-- user.js
|    |-- watchlist.js
|  |-- store/
|    |-- configureStore.js
|-- server/
|    |-- index.js
|    |-- server.js
|-- webpack.config.js
```


```actions/``` contain all action creators. These are triggered by events and return an action object (or function, using thunk middleware) that will notify reducers there needs to be a change in the state

```components/``` contains dumb components

```containers/``` contains react components that serve as containers for multiple dumb components. This will connect React components to the Redux store. The ```connect``` method will map the state to props by subscribing to a store that has been passed through the components context and will tell the component to update whenever the state changes. ```connect``` can also map dispatch to props by connecting action creators to and to the store dispatch method allowing the props to be invoked directly (rather than ```store.dispatch({type: 'MY_ACTION', id: 1})```).

```reducers/``` hold functions that take the current state and an action type and return a new state with the changes

```store/``` allows for the definition of a custom redux store to insert middleware, in this instance ```thunk```.

### Flow

```
- Dashboard
  - total cash
  - news
  - positions
  - quotes
  - watchlists
- Account
  - daytrade warnings
  - gold
  - withdrawalabe funds
  - buying power
  - pending orders
  - instant deposits
- History
  - All history
    - Filter by buy, sell, age
- Quote
- Owned Quote
  - Quote +
  - shares
  - equity value
  - average cost
  - total return
  - todays return
  - orders
- Banking
  - linked accounts
  - transfer to robinhood
  - transfer to bank
```
