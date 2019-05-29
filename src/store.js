
import { createStore } from 'redux';

// import reducers
import rootReducer from './reducers';


const initialState = {
    
};

const store = createStore(rootReducer);

export default store;