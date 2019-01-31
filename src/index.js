import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
