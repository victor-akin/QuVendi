import React from "react";
import { 
    createSwitchNavigator, 
    createStackNavigator, 
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator 
} from "react-navigation";
import { Icon } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';


// screen imports
import LoadingScreen from '../screens/LoadingScreen';
import LoginSignin from '../components/LoginSignin';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import SettingsScreen from '../screens/SettingsScreen';

import WalletScreen from '../screens/Wallet/WalletScreen';

// navigation imports
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import TransactionStack from "./TransactionStack";

// tab navigator for all bottom tab navigations
const DashboardTabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Transactions: TransactionStack,
        Profile: ProfileStack,
        'My Wallet': WalletScreen,
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName
            }
        },
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-home`;
            } else if (routeName === 'Profile') {
                iconName = `ios-person`;
            } else if (routeName === 'Transactions') {
                iconName = `ios-list-box`;
            } else if (routeName === 'My Wallet') {
                iconName = `ios-wallet`;
            }
    
            // You can return any component that you like here!
            return <IconComponent name={iconName} size={30} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: '#1EB574',
          inactiveTintColor: 'gray',
          showLabel: false 
        },
    }
); 

// making the loginscreen and signupscreen as a switch navigator
// so the next point from the loginSignup screen is either
// the loginscreen or signupscreen
const loginSignupStack = createSwitchNavigator({
    LoginScreen: LoginScreen,
    SignupScreen: SignupScreen,
});

// stacking these screens so users can go back from 
// loginscreen or signupscreen to the screen that has the 
// create account or signin buttons
const loginSignupNavigator = createStackNavigator(
{
    LoginSignin: LoginSignin,
    loginSignupStack: loginSignupStack,
    ConfirmScreen: ConfirmScreen,
},
{
    defaultNavigationOptions: {
        header: null
    }
},
);

// create stack navigator so header will show for different tab navigations
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return{
                headerLeft: (
                    <Icon name="md-menu" size={30} 
                          style={{paddingLeft: 10, color: 'white'}}  
                          onPress={() => navigation.openDrawer()} />
                ),
                headerStyle: {
                    backgroundColor: '#1EB574',
                },
                headerTintColor: '#ffffff',
            }
        }
    }
);

// create the drawer navigator for app navigation
const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: DashboardStackNavigator,
        Settings: SettingsScreen
    }
);

// switching from either loginscreen or signupscreen into app dashboard
const AppDashboardNavigator = createSwitchNavigator(
    {
        loginSignupNavigator,
        AppDrawerNavigator
    }
);

// app entry point
const AppNavigator = createSwitchNavigator(
{
    LoadingScreen: LoadingScreen,
    LoginSignin: LoginSignin,
    initLoading: AppDashboardNavigator,
    // quick load screen
    Home: DashboardStackNavigator,
},
{
    // initialRouteName: "LoadingScreen"
    initialRouteName: "Home"
}
);


export const AppContainer = createAppContainer(AppNavigator);



