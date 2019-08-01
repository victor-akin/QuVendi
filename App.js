import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import { AppContainer } from './src/navigation';

import { ApolloProvider } from 'react-apollo';

import { client } from './src/apolloClient';
import { clientInit } from './src/apolloClient';

import SplashScreen from './src/screens/SplashScreen';


export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ready: false,
      client: null
    }

    this.setupAppState = this.setupAppState.bind(this)
  }

  componentDidMount() {
    this.setupAppState()
  }

  setupAppState() {
    // setup initial app state  with apollo cache
    client.then(data => {
      this.setState({
        ready: true,
        client: data
      })
    })
  }

  render() {
    return (
      <ApolloProvider client={this.state.client || clientInit}>
        <View style={styles.appContainer}>
          <StatusBar
            barStyle = "light-content"
            backgroundColor = "#0F9D58"
            networkActivityIndicatorVisible = {true}
          />
          {this.state.ready ? <AppContainer /> : <SplashScreen />}
        </View>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  }
});
