import React, { Component } from 'react';
import { StyleSheet} from "react-native";
import { Container, Content, Card, CardItem, Text, Body, Header, Title, Button, Right } from 'native-base';



class NotificationsScreen extends Component {
    render() {
        return (
            <Container>
                <Header noLeft androidStatusBarColor="#0F9D58" style={{backgroundColor: "#1EB574"}}>
                    <Body>
                        <Title>Notifications</Title>
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
                            <Text style={styles.notification_title}>New Update</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.notification_body}>
                                    A new update is now available on playstore. 
                                    Download to have access to new features on the platform.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer style={styles.ryt}>
                            <Text style={styles.notification_date}>12 May 2019</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text style={styles.notification_title}> Welcome</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.notification_body}>
                                    Welcome to the No. 1 growing platform for online utility payment.
                                    We aim to provide quality service where you can pay all electricity bills
                                    online and at the comfort of your home.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer style={styles.ryt}>
                            <Text style={styles.notification_date}>12 May 2018</Text>
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
    notification_title: {
        color: 'grey',

    },
    notification_body: {
        color: 'grey',
        fontSize: 16,
        lineHeight: 25,
    },
    notification_date: {
        color: 'grey',
        fontSize: 14,
    },
    ryt: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});


export default NotificationsScreen;