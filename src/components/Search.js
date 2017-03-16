import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import LogoBar from '../components/LogoBar';

export default class Search extends Component {

  render () {
    const { search, searchResults, onSearch, onPackageOpen, isPackageOpen } = this.props;

    let classes = classNames('search', {
      'fullsize': !isPackageOpen,
    });

    return (
      <div className={classes}>
        <LogoBar />

        <SearchBox
          onSearch={onSearch}
          search={search}
        />
        <SearchResults
          search={search}
          onSearch={onSearch}
          searchResults={searchResults}
          onPackageOpen={onPackageOpen}
        />
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.object,
  searchResults: PropTypes.object,
  onSearch: PropTypes.func,
  onPackageOpen: PropTypes.func,
  isPackageOpen: PropTypes.bool,
};
