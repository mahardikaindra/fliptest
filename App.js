/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './src/redux/reducers';
import thunkMiddleware from 'redux-thunk';
import Routers from './src/routers';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__,
});

const configureStore = initialState => {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
