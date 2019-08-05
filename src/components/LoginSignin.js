import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { withApollo } from 'react-apollo';
import { Query } from 'react-apollo';

import { AUTH_QUERY } from '../queries/query';

class LoginSignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        testEmail: null
    };
  }

  render() {
    return (
      <View style={styles.LoginSigninContainer}>
        <View style={{alignItems: 'center', paddingBottom: 250}}>
            <Image source={require('../assets/imgs/logo-green.png')} />
            <Text style={styles.logo_name}> QuVendi </Text>
        </View>
        <View>
            
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('SignupScreen')}
            >
                <Text style={styles.q_text}> Create Account </Text>
            </TouchableOpacity>
           
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity = { .5 }
                onPress={() => this.props.navigation.navigate('LoginScreen')}
            >
                <Text style={styles.q_text}> Sign in </Text>
            </TouchableOpacity>

            {/* <Query query={AUTH_QUERY}>
                {({loading, error, data}) => {
                    if(loading) return <Text>Authorizing...</Text>
                    if(error) return <Text>Error</Text>
                    console.log(data)
                    return <Text>authorized</Text>
                }}
            </Query> */}

        </View>
      </View>
    );
  }
}

export default withApollo(LoginSignin);

const styles = StyleSheet.create({
    LoginSigninContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo_name:{
        color: '#0F9D58',
        fontSize: 40,
        fontWeight: '500',
    },
    q_text:{
        color: '#FFFFFF',
        fontSize: 14,
    },
    buttonStyle: {
        alignItems: 'center',
        padding: 20,
        paddingHorizontal: 90,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#1EB574'
    }

});