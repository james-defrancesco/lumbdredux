/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Toggle from './toggle/Toggle'; 
import logger from 'redux-logger';
//return a function within our actions (allows to hit api)
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);


const App = () => (
  // provider makes redux available to entire app via CONNECT (another part of redux)
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
