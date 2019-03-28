import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

Array.prototype.set = function (item) {
  this.push(item);

  return this;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
