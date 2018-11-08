import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FILE_LIST} from './FileList';

ReactDOM.render(<App fileList={FILE_LIST}/>, document.getElementById('root'));

/*
입력 값에 따른 파일 구조 형식 변경

입력을 받으면 

{
current files,
}

page number return function
*/