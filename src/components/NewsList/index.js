// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { parseSearchParams, api } from '../../helpers';
import { parameters } from '../../defaults';
import { NewsItem } from './..';
import styles from './styles';

type State = {
  newsList: Array<{
    title: string,
    url: string,
  }>,
};

type Props = {
  location: Object,
  classes: Object,
};

class NewsList extends Component<Props, State> {
  static propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };
  state = {
    newsList: [],
  };
  componentDidMount() {
    const initRequest = Object.keys(parseSearchParams(this.props.location.search)).length !== 0
      ? parseSearchParams(this.props.location.search)
      : parameters.defaultParams;

    api(initRequest, parameters.typeData.topHeadlines)
      .then(({ articles }) => this.setState({ newsList: articles }));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      api(parseSearchParams(nextProps.location.search), parameters.typeData.topHeadlines)
        .then(({ articles }) => this.setState({ newsList: articles }));
    }
  }
  render() {
    const { classes } = this.props;

    return !this.state.newsList.length
      ? <div>There is no news for your search</div>
      : (
        <div className={classes['news-list']}>
          {this.state.newsList.map(newsItem => (
            <NewsItem newsItem={newsItem} key={`${newsItem.title}_${newsItem.url}`} />
          ))}
        </div>

      );
  }
}

export default withRouter(injectSheet(styles)(NewsList));
