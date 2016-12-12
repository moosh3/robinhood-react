import React from 'react';
import * as userApi from '../../api/user-api';
import * as widgetApi from '../../api/widget-api';

import { loadSearchLayout } from '../../actions/search-layout-actions';
import SearchForm from '../views/search-form';

const SearchFormContainer = React.createClass({
  search: function(event) {
    event.preventDefault();
    // By assigning a "child" ref to <SearchForm />, we
    // can use that reference to gain access to the
    // .getQuery() method. See the code for
    // <SearchForm /> to see how it returns a value.
    let query = this.refs.child.getQuery();

    if (this.props.searchType === 'users') {
      userApi.searchUsers(query);
    } else if (this.props.searchType === 'widgets') {
      widgetApi.searchWidgets(query);
    }
  },

  render: function() {
    return (
      <SearchForm search={this.search} ref="child" />
    );
  }

});

export default SearchFormContainer
