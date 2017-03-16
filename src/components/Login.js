import React, { Component, PropTypes } from 'react';
import loginUser from '../actions/auth';

class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    dispatch(loginUser(username, password));
  }

  render() {
    const { username, password } = state;

    return(
      <div>
        <TextField
          onChange={(e, username) => this.username}
        />
        <TextField
          type="password",
          onChange={(e, password) => this.password}
        />
      </div>
    );
  }

  submit() {
    const username = this.username;
    const password = this.password;
  }
}

Account.PropTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default Account;
