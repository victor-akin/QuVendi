import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Form, Item, Input, Label, Icon } from 'native-base';
import PhotoUpload from 'react-native-photo-upload';
import ImagePicker from 'react-native-image-picker';

export default class ProfileEditScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        photo: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  handleChange(event, field) {
    // after validation
    const valid = (event.nativeEvent.text === '') ? false : true;
    this.setState(
        {
            [field]: event.nativeEvent.text, 
            [`${field}_isValid`]: valid
        }
    );
  }

  handleSubmit() {
    // check all valid fields and submit
    if ( 
        !( true )
        ) return ;


    this.props.navigation.navigate(
        'ConfirmScreen', 
        {
            message: 'Details submitted', 
            nextScreen: 'DashboardTabNavigator'
        }
    )  
  }

  changeImage(avatar) {
      const options = {
          noData: true
      }
      ImagePicker.launchImageLibrary(options, response => {
        if(response.uri){
            this.setState({photo: response});
        }
      });
    // alert(avatar)
  }

  render() {
      const { photo } = this.state;
    return (
      <Container>
        <Content>
            <View>
                <TouchableOpacity onPress={this.changeImage} >
                    {photo ? 
                    (
                        <Image 
                            source={{uri: photo.uri}}
                            style={{height: 300}}
                        />
                    ) 
                    :
                    ( 
                        <Image
                            source={require('../../assets/imgs/profile_2.png')}
                        />
                    )
                    }
                    {/* <Text>change photo</Text> */}
                </TouchableOpacity>
            </View>
            <Form>
                    <Text>
                        {/* {this.setState({uri:""})} */}
                        {/* {alert(this.state.uri)} */}
                    </Text>
                <Item success floatingLabel>
                    <Label style={styles.label}>full name</Label>
                    <Input onChange={ (event) => this.handleChange(event, 'full_name')} />
                    { this.state.full_name_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                </Item>

                <Item success floatingLabel>
                    <Label style={styles.label}>phone no</Label>
                    <Input onChange={ (event) => this.handleChange(event, 'residential_address')} />
                    { this.state.phone_no_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                </Item>

                <Item success floatingLabel>
                    <Label style={styles.label}>email</Label>
                    <Input onChange={ (event) => this.handleChange(event, 'email')} />
                    { this.state.email_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                </Item>
                
                <Item success floatingLabel>
                    <Label style={styles.label}>address</Label>
                    <Input onChange={ (event) => this.handleChange(event, 'address')} />
                    { this.state.address_isValid ? <Icon name='ios-checkmark-circle' style={styles.ok}/> : <Icon name='ios-brush' style={styles.edit}/>}
                </Item>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity = { .5 }
                    onPress={() => this.handleSubmit()}
                    // onPress={() => <ConfirmScreen message="Details submitted" nextScreen="DashboardTabNavigator" /> }
                >
                    <Text style={{color:'white'}}> SAVE </Text>
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

