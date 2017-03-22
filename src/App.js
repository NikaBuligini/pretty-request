import React, { Component } from 'react';
import fetch from './fetch';
import JSONTree from 'react-json-tree';
import './App.css';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

class App extends Component {
  state = {
    url: '',
    payload: {},
  }

  handleFetch = (event) => {
    event.preventDefault();
    this.setState({ });
    if (this.state.url) {
      fetch(this.state.url, 'GET', headers)
        .then(payload => this.setState({ payload }))
        .catch(err => this.setState({ payload: err }))
    }
  }

  render() {
    const { url, payload } = this.state;

    return (
      <div className="App">
        <form className="fetch-form" onSubmit={this.handleFetch}>
          <input
            type="text"
            value={url}
            onChange={(event) => this.setState({ url: event.target.value })}
          />
          <button type="submit">Fetch</button>
        </form>
        <div className="payload">
          <JSONTree data={payload} />
        </div>
      </div>
    );
  }
}

export default App;
