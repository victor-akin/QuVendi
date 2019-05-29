import { CHANGE_TEXT } from '../actions/types';


const initialState = {
    testRedux: 'inside redux'
}

function exampleReducer (state = initialState, action){
    
    switch(action.type) {
        case CHANGE_TEXT:
            return Object.assign({}, state, {testRedux: action.data});
    }
    return state;
}

export default exampleReducer;
