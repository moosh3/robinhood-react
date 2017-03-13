import React, { Component, PropTypes } from 'react';

const propTypes = {

}

export default class Header extends Component {

  render() {
    const {} = this.props;

    return (
      <nav class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <img src="logo.png" alt="Bulma logo"></img>
            </a>
            <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
            <a class="nav-item is-tab is-hidden-mobile">Watchlist</a>
            <a class="nav-item is-tab is-hidden-mobile">Account</a>
            <a class="nav-item is-tab is-hidden-mobile">Banking</a>
            <a class="nav-item is-tab is-hidden-mobile">About</a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
            <a class="nav-item is-tab is-hidden-tablet">Watchlist</a>
            <a class="nav-item is-tab is-hidden-mobile">Account</a>
            <a class="nav-item is-tab is-hidden-mobile">Banking</a>
            <a class="nav-item is-tab is-hidden-mobile">About</a>
            <a class="nav-item is-tab">
            <p class="control">
              <input class="nav-item input is-primary" type="text" placeholder="Search...">
            </p>
            <a class="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
      <br>
    )
  }
}

Header.propTypes = propTypes;
