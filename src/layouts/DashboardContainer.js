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
import CarListing from '../pages/DashboardPages/CarListing';
import AddTrip from '../pages/DashboardPages/CarListing/AddTrip';
import EditTrip from '../pages/DashboardPages/CarListing/EditTrip'
import Footer from '../components/Footer'

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
      },
      {
        route: '/car-listing/add',
        prev: '/car-listing',
        title: 'Create new trip'
      },
      {
        route: '/car-listing/edit/:id',
        prev: '/car-listing',
        title: 'Edit Listing'
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
            <Route exact path="/car-listing" component={CarListing}></Route>
            <Route exact path="/car-listing/add" component={AddTrip}></Route>
            <Route exact path="/car-listing/edit/:id" component={EditTrip}></Route>
          </Switch>
        </Layout>
        <div className="footerSection">
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(connect(state => ({}))(DashboardContainer));
