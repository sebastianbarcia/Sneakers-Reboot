import { COLOR_SHOES } from "../../data/dataShoes";
import { SHOES_COLOR, FILTER_COLOR } from "../actions/colorShoes.actions";

const initialState = {
  colorData: COLOR_SHOES,
  color: [],
  findColor: [],
};

const colorShoesReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case SHOES_COLOR:
      return {
        ...state,
        color : state.colorData
      };
     
    case FILTER_COLOR:
      return {
        ...state,
        findColor : state.colorData.find((item) => item.color === action.shoesColorFilter)
      };

    default:
      return state;
  }
};

export default colorShoesReducer
