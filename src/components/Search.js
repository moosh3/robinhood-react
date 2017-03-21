import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import SearchResults from '../components/SearchResults';

class Search extends Component {
  render () {
    const { authed, handleSubmit, handleChange } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search symbol' className='input' onChange={handleChange}/>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  authed: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Search;
