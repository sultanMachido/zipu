import { Layout } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import MenuTabs from "../components/MenuTabs";

import Navbar from "../components/Navbar/index";
import TitlePane from "../components/TitlePane";
import Bookings from "../pages/DashboardPages/Bookings";
import Staff from "../pages/DashboardPages/Staff";
import StaffAdd from "../pages/DashboardPages/StaffAdd";

import "./styles.scss";

class DashboardContainer extends Component {

  handleLogout = () => {
    this.props.history.push('/login');
  };

  render() {
    const pathname = this.props.location.pathname;
    const profile = JSON.parse(window.localStorage.getItem('_profile'));

    const innerPages = [
      {
        route: '/staff/add',
        prev: '/staff',
        title: 'Create new staff'
      }
    ]
    const selectedInnerPage = innerPages.filter(({ route }) => {
      return route === pathname;
    })[0];
    return (
      <>
        <Navbar path={pathname} profile={profile} logoutUser={this.handleLogout} />
        <div style={{ marginTop: "80px" }} />
        <MenuTabs 
          visible={selectedInnerPage ? false : true} 
        />
        <TitlePane 
          prev={selectedInnerPage && selectedInnerPage.prev}
          title={selectedInnerPage && selectedInnerPage.title}
          visible={selectedInnerPage ? true : false} 
        />
        <Layout className="layoutContainer">
          <Switch>
            <Route exact path="/bookings" component={Bookings}></Route>
            <Route exact path="/staff" component={Staff}></Route>
            <Route exact path="/staff/add" component={StaffAdd}></Route>
          </Switch>
        </Layout>
      </>
    );
  }
}

export default withRouter(connect(state => ({}))(DashboardContainer));
