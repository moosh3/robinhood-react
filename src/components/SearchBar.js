// @flow

import React, { PropTypes, Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';

export default class SearchBar extends Component {
  propTypes = {
    className: React.propTypes.string,
    inputClassName: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.string
  }

  getInitialState () {
    return {
      searchTerm: this.props.value || ''
    };
  },

  componentWillRecieveProps (nextProps) {
    if (typeof nextProps.value !== 'undefined' && nextProps.value !== this.props.value) {
      const e = {
        target: {
          value: nextProps.value
        }
      };
      this.updateSearch(e);
    }
  },

  render () {
    const {className, inputClassName, onChange, value, ...inputProps} = this.props;
    inputProps.type = inputProps.type || 'search'
    inputProps.value = this.state.searchTerm
    inputProps.onChange = this.updateSearch
    inputProps.className = inputClassName
    return (
      <div className={className}>
        <input {...inputProps} />
      </div>
    );
  },

  updateSearch (e) {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm: searchTerm
    });
  }
}
