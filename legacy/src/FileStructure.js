import React, { Component, Fragment } from 'react';

function notEq(arr1, arr2) {
    if (arr1 === undefined || arr2 === undefined) {
        return true;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return true;
        }
    }
    return false;
}

class FileStructure extends Component{
    shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.indexv === this.props.indexv) {
                const nextIndexx = nextProps.indexingNumber[nextProps.indexv];
                const indexx = this.props.indexingNumber[this.props.indexv];

                if (nextIndexx !== undefined && indexx !== undefined) {
                    return notEq(nextIndexx[nextProps.indexh], (indexx[this.props.indexh]));
                }
            }
            return true;
    }

    render() {
      const { fileList, indexingNumber, indexv, indexh} = this.props;
      console.log('FileStructure render!!')
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