import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadDishes=(dishes)=>{
    return{
        type:actionTypes.LOAD_DISHES,
        payload:dishes
    };
}

export const getDishes=()=>dispatch=>{
    axios.get("https://foodme-feafa-default-rtdb.firebaseio.com/dishes.json")
    .catch((e)=>console.log(e))
    .then((res)=>dispatch(loadDishes(res.data)))
}

export const addAsFav=(dish)=>{
    return{
        type:actionTypes.ADD_AS_FAB,
        payload:dish
    }
}
export const removeFromFav=(dish)=>{
    return{
        type:actionTypes.REMOVE_FROM_FAB,
        payload:dish
    }
}