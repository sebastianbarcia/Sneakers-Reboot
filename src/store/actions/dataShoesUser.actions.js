import { API_URL } from "../../constants/Database";

export const ADD_SHOE = 'ADD_SHOE';
export const REMOVE_SHOE = 'REMOVE_SHOE';
export const CONFIRM_SHOE = 'CONFIRM_CART';

import { getShoes } from "./shoesUserList.action";


export const addShoe = (item) => ({
    type: ADD_SHOE,
    payloadAdd: item
})

export const removeShoe = (id) => {
   
    return async dispatch => {
        try{
            const response = await fetch(`${API_URL}/orders/${id}.json` , {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },

            });
            // const result = await response.json();
            // console.log("dd", result);
            dispatch(getShoes({
                type : REMOVE_SHOE,
                id
            }));   
        }
        catch(error){
            console.log(error)
        }
    }
   
    
}


export const confirmShoe =(item) => {
    return async dispatch => {
        try {
            
            const response = await fetch(API_URL+'orders.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: new Date(),
                    items: item,
                }),
            });

            const result = await response.json();
            console.log(result);
            dispatch({
                type: CONFIRM_SHOE,
                confirm: true
            });
        } catch (error) {
            console.error(error)
        }
    }
}


