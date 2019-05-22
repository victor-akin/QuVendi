import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';
import ReactTimeout from 'react-timeout';

class ConfirmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
        const nextScreen = this.props.navigation.getParam('nextScreen', 'DashboardTabNavigator'); 
        this.props.setTimeout(() => {
            this.props.navigation.navigate(nextScreen)
        }, 500)
  }

  render() {
    const message = this.props.navigation.getParam('message', 'Account Confirmed');
    return (
      <View style={styles.confirmed_container}>
            <Icon style={styles.ok_icon} name='checkmark-circle'/>
            <Text style={styles.confirmed_text}> {message} </Text>
      </View>
    );
  }
}


export default ReactTimeout(ConfirmScreen);

const styles = StyleSheet.create({
    confirmed_container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
    },
    ok_icon:{
        fontSize: 100,
        color: '#1EB574'
    },
    confirmed_text:{
        fontSize: 20,
        color: 'gray',
        marginTop: 20
    }
});

