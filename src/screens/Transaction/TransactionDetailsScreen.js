import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base';


export default class TransactionDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.detail_heading}> Transaction name </Text>
        <View>
            <List>
                <ListItem first>
                    <Text style={styles.detail_title}>Transaction No.</Text>
                    <Text style={styles.detail_value}>{this.props.navigation.getParam('transaction_no')}</Text>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Text style={styles.detail_title}>Date</Text>
                    <Text style={styles.detail_value}>{this.props.navigation.getParam('date')}</Text>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Text style={styles.detail_title}>Transaction status</Text>
                    <Text style={styles.detail_value}>{this.props.navigation.getParam('transaction_status')}</Text>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Text style={styles.detail_title}>Amount</Text>
                    <Text style={styles.detail_value}>₦{this.props.navigation.getParam('amount')}</Text>
                </ListItem>
            </List>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    detail_heading: {
        color: '#979797',
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 20,
        marginBottom: 20
    },
    detail_title: {
        color: '#979797',
        width: 150
    },
    detail_value: {
        color: '#979797',
    }
});

