import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

Array.prototype.set = function (item) {
  this.push(item);
  const newArr = Object.assign([], this);
  this.pop();

  return newArr;
};

ReactDOM.render(<App />, document.getElementById('root'));
