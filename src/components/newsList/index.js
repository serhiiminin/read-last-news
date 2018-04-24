// @flow

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseSearchParams } from '../../enhancers';
import { NewsItem } from './..';
import { api } from './../../helpers';

type State = {
  newsList: Array<{
    title: string,
    url: string,
  }>,
};

type Props = {
  location: Object,
};

class NewsList extends Component<Props, State> {
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
          <NewsItem newsItem={newsItem} key={`${newsItem.title}_${newsItem.url}`} />
          ))}
      </div>
    );
  }
}

export default withRouter(NewsList);
