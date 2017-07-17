import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCurrentUser } from "../../../common/auth/selectors";
import Header from "../../components/Header";
import Profile from "../../routes/Profile";

class Authenticated extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/users/:id" component={Profile} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: getCurrentUser(state)
  };
}

export default connect(mapStateToProps)(Authenticated);
