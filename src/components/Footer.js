import React, { Component, PropTypes } from 'react';

const propTypes = {

};

export default class Header extends Component {
  render() {
    const {} = this.props;

    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
              is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
            </p>
            <p>
              <a className="icon" href="https://github.com/jgthms/bulma">
                <i className="fa fa-github">
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

Header.propTypes = propTypes;
