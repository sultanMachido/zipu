import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/landing/Home';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth'

import { Guest } from './utils/AuthHelper';
import DashboardContainer from './layouts/DashboardContainer';
import './styles.less';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Guest(Home)} />
          <Route exact path="/login" component={Guest(Login)} />
          <Route exact path="/register" component={Guest(Registration)} />

          <Route path="/" component={Guest(DashboardContainer)} />
        </Switch>
      </BrowserRouter>
    );
  }
}