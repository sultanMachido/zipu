import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/landing/Home';
import Login from './pages/Auth/Login';

import { Guest } from './utils/AuthHelper';
import DashboardContainer from './layouts/DashboardContainer';

import 'antd/dist/antd.css';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Guest(Home)} />
          <Route exact path="/login" component={Guest(Login)} />
          
          <Route path="/" component={Guest(DashboardContainer)} />
        </Switch>
      </BrowserRouter>
    );
  }
}