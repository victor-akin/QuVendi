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
      transaction_name: 'Token purchase',
      transaction_no: 43556477867,
      date: "10/2/2019",
      transaction_status: "Success",
      amount: 3000.00 
    };
    const details_2 = {
      transaction_name: 'Bill payment',
      transaction_no: 43556477867,
      date: "10/2/2019",
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
                  <Text style={styles.acitivity_name}>Bill payment</Text>
                </Left>
                <Right> 
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>
              
              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Bill payment</Text>
                </Left>
                <Right> 
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>
              
              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Bill payment</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Bill payment</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Bill payment</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details_2)}>
                    <Text style={styles.details_btn}>Details</Text>
                  </Button>
                </Right>
              </ListItem>

              <ListItem button>
                <Left>
                  <Text style={styles.acitivity_name}>Token purchase</Text>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.viewDetails(details)}>
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
    fontSize: 14
  },
  details_btn: {
    fontSize: 12, 
    color: '#1EB574'
  }
});


