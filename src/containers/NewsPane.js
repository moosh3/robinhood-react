import React from 'react';
import { connect } from 'react-redux';
import News from '../components/News';
import { fetchNewsIfNeeded } from '../actions/newsActions';

const mapStateToProps = (state) => ({
  account: state.account,
  authed: state.authed,
  news: state.quote.news,
})

const mapDispatchToProps = (dispatch) => ({
  fetchNewsIfNeeded: () => {
    dispatch(fetchNewsIfNeeded());
  }
})

const NewsPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(News)

export default NewsPane;
