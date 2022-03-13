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