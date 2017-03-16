import React, { Component, PropTypes } from 'react';
import { loginUser, logoutUser } from '../actions/AuthedActions';
import NavSearch from './components/NavSearch';

class Header extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(loginUser());
  }

  logout(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }


  render() {
    const { authed } = this.props;

    return (
      <nav class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <img src="logo.png" alt="Bulma logo"></img>
            </a>
            <a class="nav-item is-tab is-hidden-mobile is-active">Dashboard</a>
            <a class="nav-item is-tab is-hidden-mobile">Watchlists</a>
            <a class="nav-item is-tab is-hidden-mobile">Account</a>
            <a class="nav-item is-tab is-hidden-mobile">Banking</a>
            <a class="nav-item is-tab is-hidden-mobile">Order</a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item is-tab is-hidden-tablet is-active">Dashboard</a>
            <a class="nav-item is-tab is-hidden-tablet">Watchlists</a>
            <a class="nav-item is-tab is-hidden-mobile">Account</a>
            <a class="nav-item is-tab is-hidden-mobile">Banking</a>
            <a class="nav-item is-tab is-hidden-mobile">Order</a>
            <a class="nav-item is-tab">
            <p class="control">
              <input class="nav-item input is-primary" type="text" placeholder="Search...">
            </p>
            <a class="nav-item is-tab" onClick={this.logout}>Log out</a>
          </div>
        </div>
      </nav>
      <br>
    );
    }
}

Nav.propTypes = {
  authed: propTypes.object.isRequired,
};

export default Nav;
