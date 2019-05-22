// stack navigation for profile screen
import { createStackNavigator } from "react-navigation";

//screen imports
import ProfileScreen from "../screens/Profile/ProfileScreen";
import ProfileEditScreen from "../screens/Profile/ProfileEditScreen";
import TransactionDetailsScreen from "../screens/Transaction/TransactionDetailsScreen";


const ProfileStack = createStackNavigator(
    {
        "My Profile": ProfileScreen,
        "Edit Profile": ProfileEditScreen,
        "Transaction Details": TransactionDetailsScreen
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default ProfileStack;

