import React, { Component, PropTypes } from 'react';


export default class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Portfolio Value</p>
          <p class="title">$3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Buying Power</p>
          <p class="title">$1,230</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Withdrawalable Funds</p>
          <p class="title">$8,000</p>
        </div>
      </div>
    </nav>
    )
  }
}
