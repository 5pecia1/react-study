import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FILE_LIST, INDXING_NUMBER} from './FileList';

ReactDOM.render(<App indexv={14} indexh={2} fileList={FILE_LIST} indexingNumber={INDXING_NUMBER}/>, document.getElementById('root'));

/*
입력 값에 따른 파일 구조 형식 변경

입력을 받으면 

{
current files,
}

page number return function
*/