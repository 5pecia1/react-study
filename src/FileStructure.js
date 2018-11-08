import React, { Component } from 'react';

class FileStructure extends Component{
    render() {
      const { fileList } = this.props;
      const list = fileList.map(
          file => (<div key={file.depth + file.name}>{file.name}</div>)
      );
      return (
          <div>
              {list}
          </div>
      );
    }
}

export default FileStructure;