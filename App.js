import React, {Component} from 'react';
import RootNavigator from "./src/navigator/MainNavigator";
import {connect} from "react-redux";

class App extends Component<Props> {
  render() {
    return (
      <RootNavigator/>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);