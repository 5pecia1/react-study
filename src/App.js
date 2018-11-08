import React, { Component } from 'react';
import IndexInput from './IndexInput';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(p) {
    this.setState({
      [p.name]: p.index
    });
  }

  render() {
    return (
      <div>
        <IndexInput 
          name='indexv' 
          index={this.state.indexv} 
          handleChange={this.handleChange} />
        <IndexInput 
          name='indexh' 
          index={this.state.indexh} 
          handleChange={this.handleChange} />

        <p>indexv: {this.state.indexv}</p>
        <p>indexh: {this.state.indexh}</p>
      </div>
    );
  }
}

export default App;
