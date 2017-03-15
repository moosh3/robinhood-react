import React, { Component, PropTypes } from 'react';

const Banner = () => {

  render() {
    const {} = this.props;

    return (

    )
  }
}

Banner.propTypes = {
  authed: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default Banner;
