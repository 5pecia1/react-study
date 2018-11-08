import React, { Component } from 'react';

class App extends Component {
  static defaultProps = {
    indexv: 0,
    indexh: 0
  }
  constructor(props) {
    super(props);
    this.state = {
      indexv: props.indexv,
      indexh: props.indexh
    };

    this.handleChangeV = this.handleChangeV.bind(this);
  }

  handleChangeV(e) {
    this.setState({
      indexv: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.indexv} onChange={this.handleChangeV}/>
        <input value={this.state.indexh} />
        <p>indexv: {this.state.indexv}</p>
        <p>indexh: {this.state.indexh}</p>
      </div>
    );
  }
}

export default App;
