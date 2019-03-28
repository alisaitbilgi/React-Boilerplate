import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

Array.prototype.set = function (item) {
  this.push(item);

  return this;
};

ReactDOM.render(<App />, document.getElementById('root'));
