import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      health: ''
    };
    this.fetchTest = this.fetchTest.bind(this);
  }

  fetchTest() {
    fetch('/api/users/health')
      .then(response => response.json())
      .then(data => this.setState({ health: data.status }));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Harmony</h1>
        <button onClick={this.fetchTest}>Fetch</button>
        <div>{this.state.health}</div>
      </React.Fragment>
    );
  }
}

export default App;
