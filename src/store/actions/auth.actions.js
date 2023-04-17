import { URL_AUTH_SIGNUP , API_URL } from "../../constants/Database";

export const SIGNUP = 'SIGNUP';

export const signup = (password , email , nameUser , valueDropdown , date , usesPhotos) => {
    return async dispatch => {

        try{
        const response = await fetch(URL_AUTH_SIGNUP ,{
            method: 'POST',
            header:{
                'Content-type' : 'aplication/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken : true,
            })
        })
        const data = await response.json()

        const responseData = await fetch(API_URL+'users.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: data.localId,
                nameUser,
                valueDropdown,
                date,
                usesPhotos,
                email
            }),
        });

    dispatch({
        type: SIGNUP,
        token: data.idToken,
        userId: data.localId
    })
    }catch(error){
        console.error(error)
    } 
}
}