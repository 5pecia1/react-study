import React, { Component } from 'react';

class FileStructure extends Component{
    render() {
      const { fileList } = this.props;
      const list = fileList.map(
          file => {
              let name = (file.depth !== 0? '⌞' : '') + file.name;
              name = (file.depth <= 1? '' : '・'.repeat(file.depth - 1)) + name;
              return (<div key={file.depth + file.name}>{name}</div>)
      });
      return (
          <div>
              {list}
          </div>
      );
    }
}

export default FileStructure;