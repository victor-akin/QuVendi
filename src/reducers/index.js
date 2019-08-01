import { combineReducers } from 'redux';

// import all reducers and export them as a single object
import exampleReducer from "./exampleReducer";



const rootReducer =  combineReducers({
    testRedux: exampleReducer,
    isLoggedIn: false,
    transactions: [],
    accessToken: null,
    refreshToken: null,
    firstname: null,
    lastname: null,
    email: 'email@email.com',
});

export default rootReducer;