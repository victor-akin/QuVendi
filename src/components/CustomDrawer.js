import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, ImageBackground} from "react-native";
import { DrawerItems, SafeAreaView } from "react-navigation";



const CustomDrawer = props => (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.top_section}>
          <ImageBackground style={styles.top_banner}>
            <Image source={require('../assets/imgs/logo-white.png')} style={styles.img} />
          </ImageBackground>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    top_banner: {
      backgroundColor: '#0F9D58',
      width: '120%', 
      height: '100%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      opacity: .2
    },
    top_section: {
      height: 150,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
});


export default CustomDrawer;