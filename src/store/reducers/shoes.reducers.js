import { DATA_BRAND } from "../../data/dataShoes";
import { FILTER_SHOES , SHOES_MODEL } from "../actions/shoes.actions";
const initialState = {
    brand : DATA_BRAND,
    filteredModel: [],
    filteredShoes : []
};

const brandReducer = (state = initialState, action) => {

    switch (action.type) {
        case FILTER_SHOES:
            return{
                ...state,
             filteredShoes: state.brand.map((item) => item.brand)
            }
           
        case SHOES_MODEL:
            return{
                ...state,
             filteredModel: state.brand.filter((item) => item.brand === action.modelId)
                
            }
        default:
            return state;
    }
}

export default brandReducer;