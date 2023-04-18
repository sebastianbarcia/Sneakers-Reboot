import { SIGNUP } from "../actions/auth.actions";

const initialState = {
    token: null,
    userId: null
};

const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SIGNUP:
            return{
                ...state,
                token: action.token,
                userId: action.userId,
                nameUser : action.nameUser,
                valueDropdown : action.valueDropdown,
                date : action.date ,
                usesPhotos : action.usesPhotos ,
                email: action.mail
            };
        default:
            return state;
    }
}

export default AuthReducer;