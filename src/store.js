
import { createStore } from 'redux';

// import reducers
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;


