import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { CookiesProvider } from 'react-cookie';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import logger from 'dev/logger';
import rootReducer from 'reducers';
import Routes from 'routes';

// Load SCSS
import '../scss/application-base.scss';

const isProduction = process.env.NODE_ENV === 'production';

// Creating store
let store = null;

if (isProduction) {
  // In production adding only thunk middleware
  const middleware = applyMiddleware(thunk);

  store = createStore(
    rootReducer,
    middleware
  );
} else {
  // In development mode beside thunk
  // logger and DevTools are added
  const middleware = applyMiddleware(thunk, logger);
  let enhancer;

  // Enable DevTools if browser extension is installed
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  } else {
    enhancer = compose(middleware);
  }

  store = createStore(
    rootReducer,
    enhancer
  );
}

const isMantenimiento = false;

if (isMantenimiento) {
  // Render it to DOM
  ReactDOM.render(
    <Provider store={ store }>
      <CookiesProvider>
        <Routes />
      </CookiesProvider>
    </Provider>,
    document.getElementById('maintenance')
  );
} else {
  // Render it to DOM
  ReactDOM.render(
    <Provider store={ store }>
      <CookiesProvider>
        <Routes />
      </CookiesProvider>
    </Provider>,
    document.getElementById('root')
  );
}
