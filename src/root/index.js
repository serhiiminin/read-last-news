import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { api } from './../helpers';

class Root extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      container: PropTypes.string.isRequired,
    }),
  };
  static defaultProps = {
    classes: undefined,
  }

  state = {
    news: [],
  };
  componentDidMount() {
    api({ country: 'ua', category: 'sport', pageSize: 100, q: '' })
      .then(response => this.setState({ news: response.articles }));
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="root">
        {this.state.news.map(news => (
          <div key={news.title} className={classes.container}>
            <img src={news.urlToImage} alt={news.url} />
            <p>{news.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Root;
