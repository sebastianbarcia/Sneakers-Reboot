import { SIZES_SHOES } from "../../data/dataShoes";
import { FILTER_SIZES ,FIND_SIZES } from "../actions/sizeShoes.actions";

const initialState = {
    sizesData : SIZES_SHOES,
    filteredSizes: [],
    findSizes: 0
};


const sizeShoesReducer = (state = initialState, action) => {
   
    switch (action.type) {
       
        case FILTER_SIZES:
            return{
                ...state,
                filteredSizes: state.sizesData
            }
        case FIND_SIZES:
            
            return{
                ...state,
                findSizes: state.sizesData.find((item) => item.size === action.findSizeId)
            }    
        default:
            return state;
    }
}

export default sizeShoesReducer;