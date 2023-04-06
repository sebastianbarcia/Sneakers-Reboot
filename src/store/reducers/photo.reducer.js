import { ADD_PHOTO } from "../actions/photo.actions";

import Photo from "../../models/Photo";

const initialState = {
    photos: []
}

const photoReducer = (state = initialState, action) => {
   
    switch (action.type) {
       
        case ADD_PHOTO:
           
               // const newPhoto = new Photo(Date.now(), action.payload.image)
               
                return{
                     ...state,
                     photos: action.payload
                     //.photos.concat(newPhoto)
                 }
                
       
        default: 
        return state
            
    }
}

export default photoReducer;