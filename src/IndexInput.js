import React, { Component } from 'react';

class IndexInput extends Component {
  static defaultProps = {
    name: 'indexv',
    index: 0,
    chageValue: (e) => console.error('undefine')
  }

  changeValue = (e) => {
      this.props.handleChange({
          name: this.props.name,
          index: e.target.value
      });
  }

  render() {
    return(
        <input 
          value={this.props.index}
          onChange={this.changeValue} />
    );
  };
}

export default IndexInput;