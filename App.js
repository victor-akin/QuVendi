/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import { AppContainer } from './src/navigation';


export default class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <StatusBar 
          barStyle = "light-content" 
          backgroundColor = "#0F9D58"
          networkActivityIndicatorVisible = {true}
        />
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
});
