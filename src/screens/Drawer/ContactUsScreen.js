import React, { Component } from 'react';
import { StyleSheet} from "react-native";
import { Container, Content, Card, CardItem, Text, Body, Right, Header, Title, Button, Icon } from 'native-base';


class ContactUsScreen extends Component {
    render() {
        return (
            <Container>
                <Header noLeft androidStatusBarColor="#0F9D58" style={{backgroundColor: "#1EB574"}}>
                    <Body>
                        <Title>Contact us</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Text>Back</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text style={styles.title}>Call us</Text>
                        </CardItem>
                        <CardItem>
                            <Body style={styles.body}>
                                <Text style={styles.detail}>0908 000 0000</Text>
                                <Icon name="ios-call" style={{fontSize: 20, color: '#0F9D58', paddingLeft: 10}}/>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text style={styles.title}>Email</Text>
                        </CardItem>
                        <CardItem>
                            <Body style={styles.body}>
                                <Text style={styles.detail}>quvendisupport@gmail.com</Text>
                                <Icon name="ios-mail" style={{fontSize: 20, color: '#0F9D58', paddingLeft: 10}}/>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
        color: 'grey',

    },
    detail: {
        color: 'grey',
        fontSize: 16,
    },
    body:{
        flex: 1,
        flexDirection: 'row',
    }
});


export default ContactUsScreen;


