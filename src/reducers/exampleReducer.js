import ADD_ARTICLE from '../actions/types';

const initialState = {
    articles: []
}

function exampleReducer (state = initialState, action){
    
    if (action.type === ADD_ARTICLE) {
        // state.articles.push(action.payload);
        return  Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default exampleReducer;
