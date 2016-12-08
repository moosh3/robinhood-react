import React, { Component } from 'react';
import { render } from 'react-dom';

import LoadingButton from './LoadingButton.js'

export default class Demo extends Component {
  state = {loading: false}

  handleToggleLoading = () => {
    this.setState({loading: !this.state.loading})
  }

  render() {
    return <div>
      <h1>react-loading-button Demo</h1>

      <h2>Static</h2>
      <LoadingButton>Load</LoadingButton>
      <LoadingButton loading>Loading</LoadingButton>

      <h2>Dynamic</h2>
      <LoadingButton loading={this.state.loading}>
        {this.state.loading ? 'Loading' : 'Load'}
      </LoadingButton>
      <button type="button" onClick={this.handleToggleLoading}>
        Toggle Loading
      </button>
    </div>;
  }
}
