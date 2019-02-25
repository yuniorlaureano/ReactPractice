import * as actionTypes from './actionsTypes';

export const saveResult = (res) =>{
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
};

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            
            dispatch(saveResult(res));
        },2000);
    }
};

export const deleteresult = (resId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resId
    }
};