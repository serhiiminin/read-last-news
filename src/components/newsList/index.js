import React, { Component } from 'react';
import { NewsItem } from './..';
import { api } from './../../helpers';

class NewsList extends Component {
  state = {
    newsList: [],
  };
  componentDidMount() {
    api({ country: 'ua' })
      .then(({ articles }) => this.setState({ newsList: articles }));
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

export default NewsList;
