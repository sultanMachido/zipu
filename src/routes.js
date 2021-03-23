import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Auth/Login';
import Registration from './pages/Auth';

import { Guest, Private } from './utils/AuthHelper';
import DashboardContainer from './layouts/DashboardContainer';
import './styles.less';
import 'antd/dist/antd.css';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Guest(Login)} />
          <Route exact path="/register" component={Guest(Registration)} />
          <Route path="/" component={Private(DashboardContainer)} />
        </Switch>
      </BrowserRouter>
    );
  }
}
