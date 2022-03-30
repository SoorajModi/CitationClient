import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
