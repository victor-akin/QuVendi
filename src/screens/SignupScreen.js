import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Icon, Radio } from 'native-base';

export default class SignupScren extends Component {
  constructor(props) {
    super(props);
    this.state = {
        rememberMe: true
    };

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
              <Label style={styles.label}>fullname</Label>
              <Input />
              <Icon name='checkmark-circle' color='#3AD29F'/>
            </Item>
            
            <Item success floatingLabel>
              <Label style={styles.label}>username</Label>
              <Input />
              <Icon name='checkmark-circle' color='#3AD29F'/>
            </Item>
           
            <Item success floatingLabel>
              <Label style={styles.label}>email</Label>
              <Input />
              <Icon name='checkmark-circle' color='#3AD29F'/>
            </Item>
           
            <Item success floatingLabel>
              <Label style={styles.label}>phone no</Label>
              <Input />
              <Icon name='checkmark-circle' color='#3AD29F'/>
            </Item>
           
            <Item success floatingLabel>
              <Label style={styles.label}>password</Label>
              <Input />
              <Icon name='checkmark-circle' color='#3AD29F'/>
            </Item>
            
            <Item success floatingLabel>
              <Label style={styles.label}>confirm password</Label>
              <Input />
              <Icon name='checkmark-circle' color='#3AD29F'/>
            </Item>

            <Text style={styles.conditions}>
              By tapping on 'CREATE' you agree to the terms and conditions of use and privacy policy.
            </Text>
            
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity = { .5 }
              onPress={() => this.props.navigation.navigate('ConfirmScreen')}
            >
              <Text style={{color:'white'}}> CREATE </Text>
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
    buttonStyle: {
        marginLeft: 10,
        marginRight: 5,
        alignItems: 'center',
        padding: 20,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 30,
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
  
  label: {
    color: 'grey',
    opacity: .5
  }
});



