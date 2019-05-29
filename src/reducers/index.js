import { combineReducers } from 'redux';

// import all reducers and export them as a single object
import exampleReducer from "./exampleReducer";



const rootReducer =  combineReducers({
    testRedux: exampleReducer,
});

export default rootReducer;