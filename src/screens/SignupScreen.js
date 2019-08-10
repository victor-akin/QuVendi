import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Icon, Radio } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

// graphql imports
import { Mutation } from "react-apollo";

// queries and mutations
import { SIGNUP_MUTATION } from "../queries/mutations";
import { LOGIN_MUTATION } from "../queries/mutations";


class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberMe: true,
      lastname: '',
      firstname: '',
      email: '',
      phone_no: '',
      password: '',
      confirm_password: '',
      lastname_isValid: false,
      firstname_isValid: false,
      email_isValid: false,
      phone_no_isValid: false,
      password_isValid: false,
      confirm_password_isValid: false,
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.autoLogin = this.autoLogin.bind(this);
    this.allFieldsAreValid = this.allFieldsAreValid.bind(this);
  }

  validate(value, field) {
    if( (field === "lastname") || (field === "firstname") || (field === "email") || (field === "phone_no") ||
        (field === "password") ) {
          if(value === "") return false;
          return true;
    }
  }

  handleChange(event, field) {

    const value = event.nativeEvent.text;

    const valid = this.validate(value, field);

    this.setState(
      {
        [`${field}`]: event.nativeEvent.text, 
        [`${field}_isValid`]: valid
      }
    );
  }

  allFieldsAreValid() {
    if( this.state.lastname_isValid && this.state.firstname_isValid && 
        this.state.email_isValid && this.state.phone_no_isValid &&
        this.state.password_isValid && this.state.phone_no_isValid ){
          return true;
    }
    return false;
  }

  autoLogin() {
    // handle auto login for tokens
    this.props.client.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        data: {
          username: this.state.email,
          password: this.state.password
        }
      }
    })
    .then(data => {
      let {access_token, user_uid} = {...data.data.login, ...data.data.login.user};

      AsyncStorage.multiSet(
        [
            ['user_uid', user_uid],
            ['access_token', access_token.toString()]
        ]
      )
      .then(data => {
        // async storage write was successful
        this.props.navigation.navigate('DashboardTabNavigator');
      })
      .catch(err => {
        // error writing to asynstorage
        this.setState({loading: false});
      })
    })
    .catch(err => {
      // error from login query
      this.setState({loading: false});
    })
  }

  render() {

    return (
      <Container>
        <Content >
          <Mutation mutation={SIGNUP_MUTATION}>
            {(signup, { data }) => (

            <Form style={styles.loginForm}>
            
              <View style={{alignItems: 'center'}}>
                <Image source={require('../assets/imgs/logo-green.png')} />
                <Text style={styles.logo_name}> QuVendi </Text>
              </View>
              
              <Item success floatingLabel>
                <Label style={styles.label}>lastname</Label>
                <Input onChange={(event) => this.handleChange(event, 'lastname')}/>
                { this.state.lastname_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
              </Item>
              
              <Item success floatingLabel>
                <Label style={styles.label}>firstname</Label>
                <Input onChange={(event) => this.handleChange(event, 'firstname')}/>
                { this.state.firstname_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
              </Item>
            
              <Item success floatingLabel>
                <Label style={styles.label}>email</Label>
                <Input textContentType='emailAddress' onChange={(event) => this.handleChange(event, 'email')}/>
                { this.state.email_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
              </Item>
            
              <Item success floatingLabel>
                <Label style={styles.label}>phone no</Label>
                <Input 
                  onChange={(event) => this.handleChange(event, 'phone_no')}
                  keyboardType="numeric"
                />
                { this.state.phone_no_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                
              </Item>
            
              <Item success floatingLabel>
                <Label style={styles.label}>password</Label>
                <Input secureTextEntry={true} onChange={(event) => this.handleChange(event, 'password')}/>
                { this.state.password_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}

              </Item>
              
              <Item success floatingLabel>
                <Label style={styles.label}>confirm password</Label>
                <Input secureTextEntry={true} onChange={(event) => this.handleChange(event, 'confirm_password')} password/>
                
              </Item>

              <Text style={styles.conditions}>
                By tapping on 'CREATE' you agree to the terms and conditions of use and privacy policy.
              </Text>
              
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity = { .5 }
                disabled = {this.state.loading}
                onPress={() => {
                  if(this.allFieldsAreValid()) {

                    this.setState({loading: true});

                    signup({
                      variables: {
                        lastname: this.state.lastname,
                        firstname: this.state.firstname,
                        email: this.state.email,
                        phone_no: this.state.phone_no,
                        password: this.state.password
                      }
                    })
                    .then(data => {
                      this.autoLogin()
                    })
                    .catch(e => {
                      // handle graphql errors
                      this.setState({loading: false});
                      alert('Error on signup. Try different email');
                    })
                  }
                }}
              >
                <Text style={{color:'white'}}> { this.state.loading ? 'LOADING...' : 'CREATE' } </Text>
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
  buttonStyle: {
      marginLeft: 10,
      marginRight: 5,
      marginTop: 30,
      marginBottom: 50,
      alignItems: 'center',
      padding: 20,
      paddingHorizontal: 20,
      borderRadius: 10,
      backgroundColor: '#1EB574'
  },
  conditions:{
    marginTop: 30,
    color: '#4B5461',
    fontSize: 12,
    padding: 12
  },
  logo_name:{
    color: 'grey',
    fontSize: 10,
    opacity: .4
  },
  label:{
    color: 'grey',
    opacity: .5
  },
  edit:{
    fontSize: 20,
    color: '#65666C'
  },
  ok:{
    fontSize: 20,
    color: '#3AD29F'
  }
});


export default withApollo(SignupScreen);


