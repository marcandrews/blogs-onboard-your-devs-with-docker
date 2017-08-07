import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
  }

  componentDidMount() {
    // get list of colors from our backend api
    axios.get('/api/colors')
      .then((response) => this.setState({ colors: response.data }))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Color List App</h1>
        <ul>
          {this.state.colors.map((color, key) =>
            (
              <li key={key}>{color}</li>
            )
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
