import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Icon, Radio } from 'native-base';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rememberMe: true
    };

    this.handleRememberMe = this.handleRememberMe.bind(this)
  }

  handleRememberMe() {
      this.setState(previousState => ({rememberMe: !previousState.rememberMe}))
  }

  render() {
    return (
        <Container>
            <Content >
                <Form style={styles.loginForm}>
                    
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../assets/imgs/logo-green.png')} />
                        <Text style={styles.logo_name}> QuVendi </Text>
                    </View>
                    
                    <Item success floatingLabel>
                        <Label style={styles.label}>username, email or phone no</Label>
                        <Input />
                        <Icon name='checkmark-circle' color='#3AD29F'/>
                    </Item>
                    <Item success floatingLabel>
                        <Label style={styles.label}>password</Label>
                        <Input />
                        <Icon name='checkmark-circle' color='#3AD29F'/>
                    </Item>
                    <View style={styles.rem_forgot}>
                        <View style={styles.rememberMe_text}>
                            <Radio
                                color={"grey"}
                                selectedColor={"#3AD29F"}
                                selected={this.state.rememberMe}
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
                        onPress={() => this.props.navigation.navigate('DashboardTabNavigator')}
                    >
                        <Text style={{color:'white'}}> LOGIN </Text>
                    </TouchableOpacity>
                </Form>
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
        borderRadius: 30,
        marginTop: 50,
        backgroundColor: '#1EB574'
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



