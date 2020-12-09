import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/landing/Home';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration'
import './styles.less'

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Registration} />
        </Switch>
      </BrowserRouter>
    );
  }
}