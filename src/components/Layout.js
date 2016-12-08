import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
          <section>
            <p>Some smaller text</p>
          </section>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <h1>ReactJS and webpack first test</h1>
      </header>
    );
  }
}
