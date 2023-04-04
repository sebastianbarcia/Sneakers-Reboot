import { REMOVE_SHOE } from "../actions/dataShoesUser.actions";
import { GET_SHOES } from "../actions/shoesUserList.action";

const initialState = {
    list:[],
};

const ShoeUserListReducer = (state = initialState , action) =>{
   
    switch (action.type) {
        case GET_SHOES:
            return{
                ...state,
                list: action.payload,
            };
        case REMOVE_SHOE:
            return{
               ...state,
               list: state.list.filter(item => item.id !== action.id) 
            }
            
        default:
            return state;
    }
}

export default ShoeUserListReducer