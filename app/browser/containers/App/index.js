import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Authenticated from "./Authenticated";
import { isLoggedIn } from "../../../common/auth/selectors";

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return isLoggedIn ? <Authenticated /> : null;
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: isLoggedIn(state)
  };
}

export default connect(mapStateToProps)(App);
