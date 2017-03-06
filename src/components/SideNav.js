// @flow

import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div class="columns">
        <div class="column is-one-quarter">
          <aside class="menu">
            <br>
            <p class="menu-label is-active">
              Dashboard
            </p>
              <ul class="menu-list">
                <li><a>Equities</a></li>
                <li><a>News</a></li>
                <li><a>Funds</a></li>
              </ul>
            <p class="menu-label">
              Accounts
            </p>
            <ul class="menu-list">
              <li><a>Robinhood Gold</a></li>
              <li>
                <a class="menu-list">Banking</a>
                <ul>
                  <li><a>Transfer</a></li>
                  <li><a>Automatic Deposits</a></li>
                  <li><a>Link Bank Account</a></li>
                </ul>
              </li>
              <li><a>Investment Profile</a></li>
              <li><a>Update Account</a></li>
            </ul>
            <p class="menu-label">
              Buy/Sell
            </p>
            <ul class="menu-list">
              <li><a>Orders</a></li>
              <li><a>Transfers</a></li>
              <li><a>Dividends</a></li>
            </ul>
          </aside>
        </div>
      </div>
    )
  }
}
