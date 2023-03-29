import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import brandReducer from "./reducers/shoes.reducers";
import sizeShoesReducer from "./reducers/sizeShoes.reducers";
import colorShoesReducer from "./reducers/colorShoes.reducers";
import userDataShoesReducer from "./reducers/dataShoesUser.reducers";

const RootReducer = combineReducers({
    brand : brandReducer,
    size : sizeShoesReducer,
    color : colorShoesReducer,
    dataUser : userDataShoesReducer
})

export default createStore(RootReducer , applyMiddleware(thunk));