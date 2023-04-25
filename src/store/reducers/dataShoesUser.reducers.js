import { ADD_SHOE, REMOVE_SHOE ,CONFIRM_SHOE } from "../actions/dataShoesUser.actions";


const initialState = {
    users: 0,
    filteredUser : [],
    
}
 const userDataShoesReducer = (state = initialState , action ) => {
    switch (action.type) {
        case ADD_SHOE:
  
        case REMOVE_SHOE:
        
        case CONFIRM_SHOE:
            
        default:
           return state
    }
 }

 export default userDataShoesReducer