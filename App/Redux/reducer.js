import * as actionTypes from './actionTypes';

const initialState={
    dishes:[]
};
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LOAD_DISHES:
            return{
                ...state,
                dishes:action.payload
            }
        default:
            return state;
    }
}