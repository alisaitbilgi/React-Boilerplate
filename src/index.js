import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

Array.prototype.set = function (item) {
  this.push(item);
  const newArr = Object.assign([], this);
  this.pop();

  return newArr;
};

ReactDOM.render(<App />, document.getElementById('root'));
