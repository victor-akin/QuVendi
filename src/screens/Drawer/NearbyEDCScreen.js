import React, { Component } from 'react';
import { View, StyleSheet} from "react-native";
import { Container, Content, Text, Body, Left, Right, Header, Title, Button, Icon } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class  NearbyEDCScreen extends Component {
    render() {
        return (
            <Container>
                <Header noLeft androidStatusBarColor="#0F9D58" style={{backgroundColor: "#1EB574"}}>
                    <Left />
                    <Body>
                        <Title>Nearby EDC's</Title>
                        <Text style={styles.subtitle}>Electricity Distribution Companies</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Text>Back</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                <View style={styles.container}>
                    <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    >
                    </MapView>
                </View>
                </Content>
            </Container>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    subtitle: {
        fontSize: 12,
        color: 'white',
        paddingLeft: 7
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    map: {
    ...StyleSheet.absoluteFillObject,
    },
});


export default NearbyEDCScreen;