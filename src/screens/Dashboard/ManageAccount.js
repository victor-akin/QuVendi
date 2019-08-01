import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Icon } from 'native-base';


class ManageAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
        residential_state: '',
        residential_lga: '',
        residential_address: '',
        meter_number: '',
        residential_state_isValid: false,
        residential_lga_isValid: false,
        residential_address_isValid: false,
        meter_number_isValid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    // after validation
    const valid = (event.nativeEvent.text === '') ? false : true;
    this.setState(
        {
            field: event.nativeEvent.text, 
            [`${field}_isValid`]: valid
        }
    );
  }

  handleSubmit() {
    // check all valid fields and submit
    if ( 
        !( this.state.residential_state_isValid && 
           this.state.residential_lga_isValid && 
           this.state.residential_address_isValid && 
           this.state.meter_number_isValid )
        ) return ;


    this.props.navigation.navigate(
        'ConfirmScreen', 
        {
            message: 'Details submitted', 
            nextScreen: 'DashboardTabNavigator'
        }
    )  
  }

  render() {
    return (
        <Container>
            <Content>
                <Form>

                    <Item success floatingLabel>
                        <Label style={styles.label}>residential state</Label>
                        <Input onChange={ (event) => this.handleChange(event, 'residential_state')} />
                        { this.state.residential_state_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                    </Item>

                    <Item success floatingLabel>
                        <Label style={styles.label}>residential address</Label>
                        <Input onChange={ (event) => this.handleChange(event, 'residential_address')} />
                        { this.state.residential_address_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                    </Item>

                    <Item success floatingLabel>
                        <Label style={styles.label}>residential lga</Label>
                        <Input onChange={ (event) => this.handleChange(event, 'residential_lga')} />
                        { this.state.residential_lga_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                    </Item>
                    
                    <Item success floatingLabel>
                        <Label style={styles.label}>meter number</Label>
                        <Input 
                            onChange={ (event) => this.handleChange(event, 'meter_number')} 
                            keyboardType="numeric"    
                        />
                        { this.state.meter_number_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                    </Item>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity = { .5 }
                        onPress={() => this.handleSubmit()}
                        // onPress={() => <ConfirmScreen message="Details submitted" nextScreen="DashboardTabNavigator" /> }
                    >
                        <Text style={{color:'white'}}> SUBMIT </Text>
                    </TouchableOpacity>

                </Form>
            </Content>
        </Container>         
    );
  }
}


const styles = StyleSheet.create({
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



export default ManageAccount

