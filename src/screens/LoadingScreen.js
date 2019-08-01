import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';
import { ImageBackground, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { View, Text } from 'native-base';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };


  }

  componentDidMount() {
    
    const loggedIn = this.props.client.readQuery({
      query: gql`
        query loggedIn{
          isLoggedIn
        }
      `
    })

    this.props.setTimeout(() => {
      if(loggedIn.isLoggedIn) {
        this.props.navigation.navigate('DashboardTabNavigator')
      } else {
        this.props.navigation.navigate('LoginSignin')
      }
    }, 500);
  }

  render() {
    return (
      <ImageBackground  style={styles.loadingContainer}
                        source={require('../assets/imgs/loadinBG.png')}>
        <Image source={require('../assets/imgs/logo-white.png')} />
        <View style={{paddingTop: 30}}>
            <ActivityIndicator size="small" color="#ffffff" />
        </View>
      </ImageBackground>
    )

  }
}

export default ReactTimeout( withApollo(LoadingScreen) );

const styles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});
