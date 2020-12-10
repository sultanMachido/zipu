import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import MenuTabs from "../components/MenuTabs";

import Navbar from "../components/Navbar/index";
import Bookings from "../pages/DashboardPages/Bookings";

import "./styles.scss";

class DashboardContainer extends Component {

  handleLogout = () => {
    return;
  };

  render() {
    const path = this.props.location.pathname;
    const profile = JSON.parse(window.localStorage.getItem('_profile'));
    return (
      <>
        <Navbar path={path} profile={profile} logoutUser={this.handleLogout} />
        <div style={{ marginTop: "80px" }} />
        <MenuTabs selected={0} />
        <Layout className="layoutContainer">
          <Switch>
            <Route exact path="/bookings" component={Bookings}></Route>
          </Switch>
        </Layout>
      </>
    );
  }
}

export default withRouter(connect(state => ({}))(DashboardContainer));
