import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Right, Button, Icon, List, ListItem } from 'native-base';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.viewDetails = this.viewDetails.bind(this);
  }

  viewDetails(details) {
    // navigate to transaction details screen
    this.props.navigation.navigate("Transaction Details", details)
    
  }

  render() {
    const details = {
      type: 'token',
      transaction_name: 'Token purchase',
      transaction_no: 43556477867,
      date: "21-02-2019",
      transaction_status: "Success",
      token: '2324 4343 8561 7889',
      amount: 3000.00 
    };

    const details_o = {
      transaction_name: 'Bill payment',
      transaction_no: 43556477867,
      date: "03-05-2018",
      transaction_status: "Success",
      amount: 3000.00 
    };

    return (
      <Container>
        <Content>
          <Card style={styles.mini_details}>

            <CardItem>
              <Left style={styles.img_container}>
                <Image
                  style={styles.img}
                  source={require('../../assets/imgs/profile_2.png')}
                />
                <Left style={styles.profile_details}>
                  <Text style={styles.profile_text}>
                    Sofia King 
                  </Text>
                  <Text style={styles.profile_text}>
                    sofiaking@gmail.com
                  </Text>
                  <Button iconRight transparent success small onPress={() => this.props.navigation.navigate('Edit Profile')}>
                    <Text style={styles.btn_override}> Edit</Text>
                    <Icon name='ios-brush'/>
                  </Button>
                </Left>
              </Left>
            </CardItem>

          </Card>
          <View style={{marginTop: 20}}>
            <Text style={styles.recent_heading}>
              Recent Actitvities
            </Text>
            <List>
              
              <ListItem first>
                <Left>
                  <Text style={styles.acitivity_name}>Bill payment</Text>
                </Left>
                <Right>
                  <Button style={styles.btn_detail} transparent onPress={() => this.viewDetails(details_o)}>
                    <Text style={styles.detail_btn_text}>Details</Text>
                  </Button>
                </Right>
              </ListItem>
              
              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Bill payment</Text>
                </Left>
                <Right> 
                  <Button style={styles.btn_detail} transparent onPress={() => this.viewDetails(details_o)}>
                    <Text style={styles.detail_btn_text}>Details</Text>
                  </Button>
                </Right>
              </ListItem>
              
              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button style={styles.btn_detail} transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.detail_btn_text}>Details</Text>
                  </Button>
                </Right>
              </ListItem>
              
              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button style={styles.btn_detail} transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.detail_btn_text}>Details</Text>
                  </Button>
                </Right>
              </ListItem>
              
              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button style={styles.btn_detail} transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.detail_btn_text}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

            </List>
          </View>

        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  profile_container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  profile_title:{

  },
  mini_details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginTop: -5
  },
  img_container: {

  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profile_details: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
  },
  name: {
    color: '#979797',
    paddingBottom: 3,
    fontSize: 16
  },
  profile_text: {
    color: '#979797',
    paddingBottom: 3,
    fontSize: 14
  },
  btn_override: {
    marginLeft:-20,
    marginRight:-10
  },
  recent_heading: {
    textAlign: 'center',
    fontSize: 18,
    color: '#979797',
  },
  acitivity_name: {
    color: '#979797',
    fontSize: 14
  },
  detail_btn_text: {
    fontSize: 10, 
    color: '#1EB574'
  },
  btn_detail: {
    // borderColor: 'black',
    // borderWidth: 1,
    width: 100,
    paddingRight: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});


