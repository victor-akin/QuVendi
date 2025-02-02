import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Icon } from 'native-base';

export default class PayBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill_amount: '',
      bill_amount_isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    // after validation
    const valid = ( isNaN(event.nativeEvent.text) ) ? false : true;
    const amount = parseFloat(event.nativeEvent.text);

    this.setState(
      {
        field: amount, 
        [`${field}_isValid`]: valid
      }
    );

  }

  handleSubmit() {
    // check all valid fields and submit
    console.log(this.state)
    if ( !this.state.bill_amount_isValid ) return;


    this.props.navigation.navigate(
        'ConfirmScreen',
        {
            message: 'Payment successful', 
            nextScreen: 'Transactions'
        }
    )
  }


  render() {
    return (
      <Container>
        <Content>
          <Form style={styles.form}>

              <Item success floatingLabel>
                  <Label style={styles.label}>amount(₦)</Label>
                  <Input 
                    onChange={ (event) => this.handleChange(event, 'bill_amount')} 
                    keyboardType="numeric"
                  />
                  { this.state.bill_amount_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
              </Item>

              <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity = { .5 }
                  onPress={() => this.handleSubmit()}
              >
                  <Text style={{color:'white'}}> PAY BILL </Text>
              </TouchableOpacity>

          </Form>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  form: {
      paddingTop: 20
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
  label: {
      color: 'grey',
      opacity: .5
  },
  edit: {
      fontSize: 20,
      color: '#65666C'
  },
  ok: {
      fontSize: 20,
      color: '#3AD29F'
  }
});
