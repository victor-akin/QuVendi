// stack navigation for dashboard screen
import { createStackNavigator } from "react-navigation";

// screen imports
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import BuyToken from "../screens/Dashboard/BuyToken";
import PayBill from "../screens/Dashboard/PayBill";
import ManageAccount from "../screens/Dashboard/ManageAccount";

const HomeStack = createStackNavigator(
    {
        Home: DashboardScreen,
        PayBill: PayBill,
        'Buy Token': BuyToken,
        'Manage Account': ManageAccount
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);


export default HomeStack;
