import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button } from 'native-base';

export default class WalletScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 2300
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={styles.card_display}>
            <CardItem header style={styles.display_content}> 
              <Text style={styles.balance_title}>Wallet balance</Text> 
            </CardItem>
            <CardItem style={styles.display_content}> 
              <Text style={styles.balance_amount}>₦{this.state.balance}</Text> 
            </CardItem>
          </Card>

          <Button transparent success full style={styles.btn}>
            <Text style={styles.btn_text}>
              Fund wallet via bank
            </Text>
          </Button>

          <Button transparent success full style={styles.btn}>
            <Text style={styles.btn_text}>
              Fund wallet via USSD
            </Text>
          </Button>

        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  card_display: {
    height: 200,
    marginTop: -5,
    marginBottom: 20,
  },
  balance_title: {
    fontSize: 12,
    color: '#979797'
  },
  balance_amount: {
    textAlign: 'center',
    fontSize: 50,
    color: '#979797'
  },
  btn: {
    marginTop: 20
  },
  display_content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
