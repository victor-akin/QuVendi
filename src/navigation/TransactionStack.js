// stack navigation for profile screen
import { createStackNavigator } from "react-navigation";

//screen imports
import TransactionsScreen from "../screens/Transaction/TransactionsScreen";
import TransactionDetailsScreen from "../screens/Transaction/TransactionDetailsScreen";


const TransactionStack = createStackNavigator(
    {
        "My Transactions": TransactionsScreen,
        "Transaction Details": TransactionDetailsScreen
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

export default TransactionStack;

