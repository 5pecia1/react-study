import React, { Component } from 'react';

class App extends Component {
  static defaultProps = {
    indexv: 0,
    indexh: 0
  }

  render() {
    return (
      <div>
        <input value={this.props.indexv} />
        <input value={this.props.indexh} />
      </div>
    );
  }
}

export default App;
