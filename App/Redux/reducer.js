import * as actionTypes from './actionTypes';

const initialState={
    dishes:[],
    favs:[]
};
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LOAD_DISHES:
            return{
                ...state,
                dishes:action.payload
            }
        case actionTypes.ADD_AS_FAB:
            return{
                ...state,
                favs:state.favs.concat(action.payload)
            }
        default:
            return state;
    }
}