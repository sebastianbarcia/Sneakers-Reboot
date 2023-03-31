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
        default:
            return state;
    }
}

export default ShoeUserListReducer