import React, { Component } from 'react';
import { api } from './helpers';

class App extends Component {
  componentDidMount() {
    api({sources: 'bbc-news'})
      .then(a => console.log(a))
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
