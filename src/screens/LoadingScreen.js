import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';
import { ImageBackground, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { View } from 'native-base';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.setTimeout(() => {
        // this.props.navigation.navigate('LoginSignin')
        this.props.navigation.navigate('Manage Account')
    }, 500)
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
    );
  }
}

export default ReactTimeout(LoadingScreen);

const styles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});
