import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Content, CardItem, Text, Left, Right, Button, Icon, List, ListItem } from 'native-base';


export default class TransactionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.viewDetails = this.viewDetails.bind(this);
  }

  viewDetails(details) {
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
    const details_2 = {
      type: 'bill',
      transaction_name: 'Bill payment',
      transaction_no: 43556417867,
      date: "29-04-2019",
      transaction_status: "Success",
      amount: 3000.00 
    };

    return (
      <Container>
        <Content>
          <View style={{marginTop: 20}}>
            <Text style={styles.recent_heading}>
              Transaction History
            </Text>
            <List>
              
              <ListItem first>
                <Left>
                  <View style={styles.title_date}>
                    <Text style={styles.acitivity_name}>Bill payment</Text>
                    <Text style={styles.date}>29-04-2019</Text>
                  </View>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>
             
              <ListItem>
                <Left>
                  <View style={styles.title_date}>
                    <Text style={styles.acitivity_name}>Bill payment</Text>
                    <Text style={styles.date}>29-04-2019</Text>
                  </View>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem>
                <Left>
                  <View style={styles.title_date}>
                    <Text style={styles.acitivity_name}>Bill payment</Text>
                    <Text style={styles.date}>29-04-2019</Text>
                  </View>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem>
                <Left>
                  <View style={styles.title_date}>
                    <Text style={styles.acitivity_name}>Token purchase</Text>
                    <Text style={styles.date}>21-02-2019</Text>
                  </View>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem>
                <Left>
                  <View style={styles.title_date}>
                    <Text style={styles.acitivity_name}>Token purchase</Text>
                    <Text style={styles.date}>21-02-2019</Text>
                  </View>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem>
                <Left>
                  <View style={styles.title_date}>
                    <Text style={styles.acitivity_name}>Bill payment</Text>
                    <Text style={styles.date}>29-04-2019</Text>
                  </View>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem>
                <Left>
                  <View style={styles.title_date}>
                    <Text style={styles.acitivity_name}>Token purchase</Text>
                    <Text style={styles.date}>21-02-2019</Text>
                  </View>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem>
                <Left>
                  <View style={styles.title_date}>
                    <Text style={styles.acitivity_name}>Bill payment</Text>
                    <Text style={styles.date}>29-04-2019</Text>
                  </View>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
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
  recent_heading: {
    textAlign: 'center',
    fontSize: 18,
    color: '#979797',
  },
  acitivity_name: {
    color: '#979797',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  details_btn: {
    fontSize: 12, 
    color: '#1EB574'
  },
  title_date: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  date: {
    alignSelf: 'flex-start',
    fontSize: 10,
    color: 'grey'
  }
});


