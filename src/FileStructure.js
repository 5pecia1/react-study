import React, { Component, Fragment } from 'react';

class FileStructure extends Component{
    render() {
      const { fileList, indexingNumber, indexv, indexh} = this.props;
      console.log(indexv)
      const list = fileList
        .filter(file => {
            if(indexingNumber.hasOwnProperty(indexv)) {
                const list = indexingNumber[indexv].list;
                return list.includes(file)
            } 
            return false;
        })
        .map(
          file => {
            const indexingH = indexingNumber[indexv].hasOwnProperty(indexh)
            ? indexingNumber[indexv][indexh] 
            : [];
            let name = (file.depth !== 0? '⌞' : '') + file.name;
            name = (file.depth <= 1? '' : '・'.repeat(file.depth - 1)) + name;
            return <Fragment>{
                indexingH.includes(file)
                ? (<div key={file.depth + file.name}><b>{name}</b></div>)
                : (<div key={file.depth + file.name}>{name}</div> )
            }</Fragment>;
        });

      return (
          <div>
              {list}
          </div>
      );
    }
}

export default FileStructure;