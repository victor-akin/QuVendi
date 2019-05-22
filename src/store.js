
import { createStore, combineReducers } from 'redux';

// import reducers

//-- import all reducers at once
// import rootReducer from './reducers';

//-- import reducers one at time
import exampleReducer from './reducers/exampleReducer';

const store = createStore(exampleReducer);

// combine reducers
// const allReducers = combineReducers({
//   places: placeReducer
// });


export default store;