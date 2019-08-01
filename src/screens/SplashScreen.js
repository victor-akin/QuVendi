import React, { Component } from 'react';
import { ImageBackground, StyleSheet, ActivityIndicator, Image, StatusBar } from 'react-native';
import { View, Text } from 'native-base';



class SplashScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ImageBackground  style={styles.loadingContainer}
                source={require('../assets/imgs/loadinBG.png')}
            >

                <Image source={require('../assets/imgs/logo-white.png')} />
                
                {/* <View style={{paddingTop: 30}}>
                    <Text>SplashScreen</Text>
                </View> */}

            </ImageBackground>
        )
    }
}

export default SplashScreen

const styles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});

