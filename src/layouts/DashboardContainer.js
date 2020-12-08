import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import Dashboard from "../pages/DashboardPages/Dashboard";
import Orders from "../pages/DashboardPages/Orders";
import DispatchDistribution from "../pages/DashboardPages/DispatchDistribution";
import Navbar from "../components/Navbar/index";
import Analytics from "../pages/DashboardPages/Analytics";
import "./../styles/dashboard.scss";

class DashboardContainer extends Component {

  handleLogout = () => {
    return;
  };

  render() {
    const path = this.props.location.pathname;
    const profile = JSON.parse(window.localStorage.getItem('_profile'));
    return (
      <>
        <Navbar 
          path={path}
          profile={profile} 
          logoutUser={this.handleLogout} 
        />
        <div style={{ marginTop: "80px" }} />
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-md-12 col-lg-12">
              <Switch>
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/orders" component={Orders}></Route>
                <Route
                  exact
                  path="/orders-dispatch-distribution/:id"
                  component={DispatchDistribution}
                ></Route>
                <Route exact path="/analytics" component={Analytics}></Route>
                <Route exact path="/customers" component={Customers}></Route>
                <Route exact path="/settings" component={Settings}></Route>
                <Route exact path="/onboarding/complete" component={CompleteOnboarding}></Route>
                <Route exact path="/manage" component={ManageAccount}></Route>
                <Route exact path="/receipts" component={Receipts}></Route>
              </Switch>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(connect(state => ({}))(DashboardContainer));
