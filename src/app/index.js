import React, { Component } from 'react';
import SelectParam from './../components/selectParam';
import { parameters } from './../defaults';
import { api } from './../helpers';

class App extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    api({ country: 'ua', category: 'sport', pageSize: 100, q: '' })
      .then(response => this.setState({ news: response.articles }));
  }
  render() {
    return (
      <div className="root">
        <SelectParam parameters={parameters.countries} />
        <SelectParam parameters={parameters.categories} />
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

export default App;
