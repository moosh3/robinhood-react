// @flow

import React, { Component } from 'react';
import Router, { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from '../Header';
import Banner from '../Banner';
import SideNav from '../SideNav';
import Portfolio from '../Portfolio';
import Footer from '../Footer';

export default class App extends Component {
  render() {
    const {children} = this.props;

    return (
      <div class='content'>
        <Header />
          <Banner />
            <SideNav />
            <Portfolio />
          <Footer />
      </div>
    );
  }
}
