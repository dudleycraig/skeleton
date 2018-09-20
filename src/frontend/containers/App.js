/** containers/App.js **/

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

const App = props => {
  return (
    <Router>
      <div>
        {/**
        <ul className="navigation main">
          <li className="left"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li className="right"><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
          **/}
      </div>
    </Router>
  );
};

const AppContainer = connect(
  state => state,
)(App);

export {AppContainer as App};
