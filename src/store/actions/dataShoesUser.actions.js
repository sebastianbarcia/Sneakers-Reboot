import { API_URL } from "../../constants/Database";

export const ADD_SHOE = 'ADD_SHOE';
export const REMOVE_SHOE = 'REMOVE_SHOE';
export const CONFIRM_SHOE = 'CONFIRM_CART';


export const addShoe = (item) => ({
    type: ADD_SHOE,
    payloadAdd: item
})

export const removeShoe = (item) => ({
    type: REMOVE_SHOE,
    payloadRemove: item
})


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


