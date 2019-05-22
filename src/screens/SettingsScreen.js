import React, { Component } from "react";
import { Button, View, Text } from "react-native";


class SettingsScreen extends Component {
    render() {
      return (
        <View>
          <Text>
            Registration screen
          </Text>
          <Button
            title="Go to LoadingScreen"
            onPress={() => this.props.navigation.navigate('LoadingScreen')}
          />
        </View>
      );
    }
}

export default SettingsScreen;