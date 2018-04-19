import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseSearchParams } from '../../enhancers';
import { NewsItem } from './..';
import { api } from './../../helpers';

class NewsList extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  state = {
    newsList: [],
  };
  componentDidMount() {
    api(parseSearchParams(this.props.location.search))
      .then(({ articles }) => this.setState({ newsList: articles }));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      api(parseSearchParams(nextProps.location.search))
        .then(({ articles }) => this.setState({ newsList: articles }));
    }
  }
  render() {
    return (
      <div className="news-list">
        {this.state.newsList.map(newsItem => (
          <NewsItem newsItem={newsItem} key={newsItem.title} />
          ))}
      </div>
    );
  }
}

export default withRouter(NewsList);
