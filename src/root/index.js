import React, { Component } from 'react';
import { api } from './../helpers';

class Root extends Component {
  state={
    news: [],
  };
  componentDidMount() {
    api({ country: 'ua', category: 'sport', pageSize: 100, q: ''})
      .then(response => this.setState({news: response.articles}))
  }
  render() {
    return (
      <div className="Root">
        {this.state.news.map(news => (
          <div key={news.title}>
            <img src={news.urlToImage} alt={news.url} />
            <p>{news.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Root;
