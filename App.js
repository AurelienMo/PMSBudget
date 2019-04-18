import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Logo from "./src/views/components/Logo";
import RootNavigator from "./src/navigator/MainNavigator";

export default class App extends Component<Props> {
  render() {
    return (
      <RootNavigator/>
    );
  }
}

