// @flow 

import React, { Component } from 'react';
import Router, { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from './common/Header';
import Banner from './common/Banner';
import SideNav from './common/SideNav';
import Portfolio from './common/Portfolio';
import Footer from './common/Footer';

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
