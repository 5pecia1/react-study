import React, { Component } from 'react';
import IndexInput from './IndexInput';
import FileStructure from './FileStructure'

class App extends Component {
  static defaultProps = {
    indexv: 0,
    indexh: 0,
    fileList: [],
    indexingNumber: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      indexv: props.indexv,
      indexh: props.indexh,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(p) {
    this.setState({
      [p.name]: p.index
    });
  }

  render() {
    console.return
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

        <FileStructure 
          fileList={this.props.fileList} 
          indexingNumber={this.props.indexingNumber}
          indexv={this.state.indexv} 
          indexh={this.state.indexh}/>
      </div>
    );
  }
}

export default App;
