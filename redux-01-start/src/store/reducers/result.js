import * as actionTypes from '../actions';

const initialState = {
    results:[]
};

const reducer = (state = initialState, action) => {
       
    if(action.type == actionTypes.STORE_RESULT){
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
    }

    if(action.type == actionTypes.DELETE_RESULT){
        const updatedArray = state.results.filter(result => result.id !== action.id);
        return {
            ...state,
           results: updatedArray
        }
    }
    
    return state;
};

export default reducer;