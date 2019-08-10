import React, { Component } from 'react';
import { StyleSheet, Dimensions, ScrollView, View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Container, Card, CardItem, Body } from 'native-base';

import { gql } from "apollo-boost";
import { Query } from 'react-apollo';

import { TRANSACTIONS_QUERY } from '../../queries/query';
import { AUTH_QUERY } from '../../queries/query';

const screenWidth = (Dimensions.get('window').width)*1.5;

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  componentDidMount() {
    // this.props.navigation.openDrawer();
    // this.props.navigation.navigate("Nearby EDC");
  }

  render() {

    return (
      <ScrollView style={{paddingLeft: 5, paddingRight: 5}}>
      <View style={styles.dashboardContainer}>
        <Text style={styles.chartLabel}>
          Overview of bills paid
        </Text>
        <ScrollView horizontal={true}>
        <BarChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              data: [
                (Math.random() * 100) + 1000,
                (Math.random() * 100) + 3000,
                (Math.random() * 100) + 1000,
                (Math.random() * 100) + 3000,
                (Math.random() * 100) + 2000,
                (Math.random() * 100) + 500,
                (Math.random() * 100) + 900,
                (Math.random() * 100) + 4600,
                (Math.random() * 100) + 6000,
                (Math.random() * 100) + 7000,
                (Math.random() * 100) + 8000,
                (Math.random() * 100) + 4000
              ]
            }]
          }}
          width={screenWidth} // from react-native
          height={220}
          yAxisLabel={'₦'}
          chartConfig={{
            backgroundColor: '#FEFEFE',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(19, 105, 23, ${opacity})`,
            style: {
              borderRadius: 10,
              paddingRight: 10
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        </ScrollView>

        <View style={styles.cardContainer}>
          
          <Card style={styles.cardStyle}>
            <CardItem button onPress={() => this.props.navigation.navigate('PayBill')}>
              <Body>
                <Text style={styles.textTip}>
                  Make payments for your utility bills
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => this.props.navigation.navigate('PayBill')}>
              <Text>Pay Bills</Text>
            </CardItem>
          </Card>
          
          <Card style={styles.cardStyle}>
            <CardItem button onPress={() => this.props.navigation.navigate('Buy Token')}>
              <Body>
                <Text style={styles.textTip}>
                  Buy token for your electricity meter
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => this.props.navigation.navigate('Buy Token')}>
              <Text>Buy Token</Text>
            </CardItem>
          </Card>
          
          <Card style={styles.cardStyle}>
            <CardItem button onPress={() => this.props.navigation.navigate('Manage Account')}>
              <Body>
                <Text style={styles.textTip}>
                  Manage your QuVendi account
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => this.props.navigation.navigate('Manage Account')}>
              <Text>Manage Account</Text>
            </CardItem>
          </Card>

        </View>
        
        {/* <Query query={TRANSACTIONS_QUERY}>
          {({loading, error, data}) => {
            if(loading) return <Text>loading...</Text>
            if(error) return <Text>error...</Text>
            
            console.log(data)
            return <Text>got data</Text>
          }}
        </Query> */}

      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create(
  {
    dashboardContainer: {
      paddingRight: 5,
      paddingLeft: 5,
      marginTop: 10,
    },
    chartLabel: {
      paddingLeft: 0,
      fontSize: 20,
      color: '#65666C'
    },
    cardContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
      paddingBottom: 30,
    },
    cardStyle: {
      flex: 1,
      borderRadius: 10,
      height: 130,
    },
    textTip: {
      fontSize: 12,
      color: 'grey',
      opacity: .5
    }
  }
);



export default DashboardScreen;

