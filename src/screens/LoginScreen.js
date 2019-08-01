import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Icon, Radio } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { QUVENDI_LOCAL_STORAGE } from '../../appConfig';

// graphql imports
import { Mutation } from 'react-apollo';

// queries and mutations
import { LOGIN_MUTATION } from '../queries/mutations';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rememberMe: true,
        loginName: '',
        password: '',
        login_failed: true
    };

    this.handleRememberMe = this.handleRememberMe.bind(this);
    this.toDashboard = this.toDashboard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.persistData = this.persistData.bind(this);
  }

  handleRememberMe() {
      this.setState(previousState => ({rememberMe: !previousState.rememberMe}))
  }

  toDashboard() {
    if( !this.state.login_failed ) {
        this.props.navigation.navigate('DashboardTabNavigator');
    }
    else {
        alert("Invalid login details")
    }
  }

  persistData(data) {
      console.log(data)
      
    let persist_user_login = async (data) => {
       
        try {
            let {access_token, expires_in, refresh_token} = {...data.data.login};
            await AsyncStorage.multiSet(
                [
                    ['access_token', access_token.toString()], 
                    ['refresh_token', refresh_token.toString()]
                ]
            );
            // console.log(AsyncStorage.clear())

            this.setState({login_failed: false})
            this.toDashboard()
        } catch (e) {
            // spooky error when writing to storage
            return e;
        }
    }
    // console.log(data.login)
    persist_user_login(data)
  }

  handleChange(event, field) {
      this.setState({
          [`${field}`]: event.nativeEvent.text
      });
  }

  render() {
    return (
        <Container>
            <Content>
                <Mutation mutation={LOGIN_MUTATION}>
                    { (login, { loading, error, data }) => (
                        <Form style={styles.loginForm}>
                            
                            <View style={{alignItems: 'center'}}>
                                <Image source={require('../assets/imgs/logo-green.png')} />
                                <Text style={styles.logo_name}> QuVendi </Text>
                            </View>
                            
                            <Item success floatingLabel>
                                <Label style={styles.label}>email</Label>
                                <Input onChange={(event) => this.handleChange(event, 'loginName')} />
                            </Item>
                            <Item success floatingLabel>
                                <Label style={styles.label}>password</Label>
                                <Input secureTextEntry={true} onChange={(event) => this.handleChange(event, 'password')} />
                            </Item>
                            <View style={styles.rem_forgot}>
                                <View style={styles.rememberMe_text}>
                                    <Radio
                                        color={"grey"}
                                        selectedColor={"#3AD29F"}
                                        selected={this.state.rememberMe}
                                        onPress={this.handleRememberMe}
                                    />
                                    <Text 
                                        style={{paddingLeft: 7}}
                                        onPress={this.handleRememberMe}
                                    >
                                        Remember Me
                                    </Text>
                                </View>
                                <View>
                                    <Text 
                                        style={{color:'#3AD29F'}} 
                                        onPress={() => this.props.navigation.navigate('LoadingScreen')}
                                    >
                                        Forgot password?
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                activeOpacity = { .5 }
                                onPress={() => login(
                                    {
                                        variables: {
                                            data: {
                                                username: this.state.loginName,
                                                password: this.state.password
                                            }
                                        }
                                    }
                                )
                                .then(data => {
                                    // save data in graphql cache and asyncStorage
                                    this.persistData(data)
                                })
                                .catch(e => {
                                    // if there is an arror with credentials
                                    console.log(e.message)
                                })}
                            >
                                <Text 
                                    style={{color:'white'}} 
                                    disabled={loading ? true : false}
                                > 
                                    {loading ? <Text>LOADING....</Text> : <Text>LOGIN</Text>}
                                </Text>
                            </TouchableOpacity>
                        </Form>
                        
                    )}
                </Mutation>
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    loginForm: {
      paddingTop: 70,
      paddingRight: 10
    },
    rememberMe_text: {
        flex:1, 
        flexDirection:'row',
        alignItems: 'center',
    },
    rem_forgot:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',  
      paddingLeft: 20,
      paddingRight: 15,
      paddingTop: 40,
    },
    buttonStyle: {
        marginLeft: 10,
        marginRight: 5,
        alignItems: 'center',
        padding: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 50,
        backgroundColor: '#1EB574',
    },
    logo_name:{
        color: 'grey',
        fontSize: 10,
        opacity: .4
    },
    label:{
        color: '#979797'
    }
  });



