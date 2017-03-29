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

### State hoisting

```Javascript
class NameContainer extends React.Component {
  render() {
    return <Name onChange={newName => alert(newName)}/>
  }
}

const Name = ({ onChange }) =>
  <input onChange={e => onChange(e.target.value)}/>
```


### Normalized data

```Javascript
const data = normalize(response, arrayOf(schema.user))

state = _.merge(state, data.entities)  
```


### Inline-list iteration

```Javascript
return (
  <div>
    {this.props.list.map(function (data, i) {
      return (<Component data={data} key={i}/>)
    })}
  </div>
);

// Another example sorta

const SearchSuggestions = (props) => {
  // renderSearchSuggestion() behaves as a pseduo SearchSuggestion component
  // keep it self contained and it should be easy to extract later if needed
  const renderSearchSuggestion = listItem => (
    <li key={listItem.id}>{listItem.name} {listItem.id}</li>
  );

  return (
    <ul>
      {props.listItems.map(renderSearchSuggestion)}
    </ul>
  );
};
```

### Ensured button

```Javascript
const Button = props => <button type="button" {...props}>
```

###Conditionls in JSX

```Javascript
// Instead of
const sampleComponent = () => {
  return isTrue ? <p>True!</p> : <none/>
};
// Use short circut evaluation
const sampleComponent = () => {
  return isTrue && <p>True!</p>
};
```

### Class methods with arrow function

```Javascript
/**
 * Class methods (using arrow functions)
 * With class components, when you pass methods to subcomponents, you have to ensure that they have the right `this` when they’re called.
 * This is usually achieved by passing this.handleSubmit.bind(this) to the subcomponent.
 * However using arrow functions does not create its own this context, so this has its original meaning from the enclosing context.
 */

class ProfileContainer extends Component {
  state = {activeProfile: false};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.model.save()
  };

  handleNameChange = (e) => {
    this.props.model.changeName(e.target.value)
  };

  handleExpand = (e) => {
    e.preventDefault();
    this.setState({activeProfile: !this.state.activeProfile})
  };

  render() {
    return (
      <div>
        Is Profile Active: {this.state.activeProfile}
      </div>
    );
  }
}
```

### JSX Spread Attributes

```Javascript
// Spread Attributes is a JSX feature. It’s syntactic sugar for passing all of
// an object’s properties as JSX attributes.

// These two examples are equivalent.

// props written as attributes
let main = () => <main className="main" role="main">{children}</main>;

// props "spread" from object
// Note: `children` key is used to populate the component children.
let main = () => <main {...{className: "main", role: "main", children}} />;

// Use this to forward props to underlying components.
let FancyDiv = (props) => <div className="fancy" {...props} />;

// Now, I can expect FancyDiv to add the attributes it's concerned with as well
// as those it's not.
let FancyDiv = () => <FancyDiv data-id="my-fancy-div">So Fancy</FancyDiv>;
// output: <div className="fancy" data-id="my-fancy-div">So Fancy</div>

// Keep in mind that order matters. If props.className is defined, it'll clobber
// the className defined by FancyDiv
let FancyDiv = () => <FancyDiv className="my-fancy-div"/>;
// output: <div className="my-fancy-div"></div>

// We can make FancyDivs className always “win” by placing it after
// the spread props ({...props}).

// my `className` clobbers your `className`
const FancyDiv = props =>
  <div {...props} className="fancy"/>;
// You should handle these types of props gracefully. In this case, I’ll merge
// the author’s props.className with the className needed to style my component.

const FancyDiv = ({ className, ...props }) => (
  <div
    className={["fancy", className].join(' ')}
    {...props}
  />
);
```
