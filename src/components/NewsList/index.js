// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Transition, TransitionGroup } from 'react-transition-group';
import { parseSearchParams, api } from '../../helpers';
import { parameters } from '../../defaults';
import variables from '../../styles/variables';
import { NewsItem } from './..';
import styles from './styles';

type State = {
  newsList: Array<{
    title: string,
    url: string,
  }>,
  isLoading: boolean,
};

type Props = {
  location: Object,
  match: Object,
  classes: Object,
  showNotification: Function,
};

class NewsList extends Component<Props, State> {
  static propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    showNotification: PropTypes.func.isRequired,
  };

  state = {
    newsList: [],
    isLoading: false,
  };

  componentDidMount() {
    const queryParams = Object.keys(
      parseSearchParams(this.props.location.search)).length !== 0
      ? parseSearchParams(this.props.location.search)
      : parameters.defaultParams;

    this.renderNews(queryParams);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.location.search !== prevProps.location.search) {
      const queryParams = parseSearchParams(this.props.location.search);

      this.renderNews(queryParams);
    }
  }
  renderNews = (queryParams: Object) => {
    const request = !queryParams[parameters.sources]
      ? queryParams
      : { [parameters.sources]: queryParams[parameters.sources] };

    return Promise.resolve()
      .then(() => this.setState({ isLoading: true }))
      .then(() => api(request, parameters.typeData.topHeadlines))
      .then(({ articles }) => this.setState({
        newsList: articles,
        isLoading: false,
      }))
      .catch(error => this.props.showNotification(error));
  };

  render() {
    const { classes } = this.props;
    const { newsList, isLoading } = this.state;

    return !newsList.length
      ? <div className={classes['news-list-empty']}>There is no news</div>
      : (
        <TransitionGroup className={classes['news-list']}>
          {newsList.map((newsItem, key) => (
            <Transition
              key={`${newsItem && newsItem.title}` || key}
              timeout={variables.timeout.listBlocks}
              appear
            >
              {status => (
                <NewsItem
                  isLoading={isLoading}
                  newsItem={newsItem}
                  key={`${newsItem && newsItem.title}` || key}
                  status={status}
                />
                )}
            </Transition>

            ))}
        </TransitionGroup>
      );
  }
}

const enhance = compose(
  withRouter,
  injectSheet(styles),
);

export default enhance(NewsList);
