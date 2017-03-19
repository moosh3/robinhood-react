import React, { PropTypes, Component, findDOMNode } from 'react';
import _ from 'lodash';
import shallowEqual from 'react-pure-render/shallowEqual';

import SearchResultItem from './SearchResultItem';
//import Spinner from './Spinner';

import '../../assets/stylesheets/search-results.scss';

export default class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      bounds: {},
    };

    this.calledTriggerPositions = {};
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
  }

  componentDidUpdate (prevProps, prevState) {
    if (!shallowEqual(this.props.searchResults, prevProps.searchResults)) this.handleResize();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  render () {
    const { searchResults, onPackageOpen } = this.props;
    const packages = searchResults.items || [];
    const loading = _.get(searchResults, 'isFetching') || false;

    const maxRank = _.max(_.map(packages, (item) => item.rank));

    return (
      <div>
        <div className='search-results'>
          {_.map(packages, (item, index) =>
            <SearchResultItem
              key={index}
              item={item}
              maxRank={maxRank}
              onSelect={onPackageOpen}
            />
          )}

        </div>
        <Loader visible={loading} />
      </div>
    );
  }

  handleResize (e) {
    const el = findDOMNode(this);
    const bounds = (el) ? el.getBoundingClientRect() : {};

    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      bounds: _.pick(bounds, ['bottom', 'height', 'left', 'right', 'top', 'width']),
    });
  }

  handleScroll (e) {
    const threshold = 100;
    const { windowHeight, bounds } = this.state;
    const { search, onSearch } = this.props;

    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    const triggerPosition = (bounds.height - threshold);

    if ((scrollTop + windowHeight) > triggerPosition && !this.calledTriggerPositions[triggerPosition]) {
      this.calledTriggerPositions[triggerPosition] = true;
      if (onSearch) onSearch(search.term, search.next);
    }
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.object,
  onPackageOpen: PropTypes.func,
};
