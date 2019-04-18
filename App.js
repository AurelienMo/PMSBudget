import React, {Component} from 'react';
import RootNavigator from "./src/navigator/MainNavigator";
import {Provider} from "react-redux";
import Store from './src/Store/configureStore';

export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={Store}>
          <RootNavigator/>
        </Provider>
    );
  }
}
