import { createStore , combineReducers } from "redux";

import brandReducer from "./reducers/shoes.reducers";
import sizeShoesReducer from "./reducers/sizeShoes.reducers";
import colorShoesReducer from "./reducers/colorShoes.reducers";

const RootReducer = combineReducers({
    brand : brandReducer,
    size : sizeShoesReducer,
    color : colorShoesReducer
})

export default createStore(RootReducer);