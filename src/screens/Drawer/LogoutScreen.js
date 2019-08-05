import React, { Component } from 'react';
import { StyleSheet} from "react-native";
import { Container, Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { withApollo } from 'react-apollo';


class LogoutScreen extends Component {

    componentDidMount(){
        // clear cache and local storage
        AsyncStorage.clear()
          .then(data =>{
              // redirect to signup screen
              this.props.client.clearStore()
              
              this.props.navigation.navigate('LoginSignin')
          })
    }

    render(){
        return(
            <Container>
            </Container>
        )
    }
}



export default withApollo(LogoutScreen)
