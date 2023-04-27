import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import brandReducer from "./reducers/shoes.reducers";
import sizeShoesReducer from "./reducers/sizeShoes.reducers";
import colorShoesReducer from "./reducers/colorShoes.reducers";
import userDataShoesReducer from "./reducers/dataShoesUser.reducers";
import ShoeUserListReducer from "./reducers/shoesUserList.reducer";
import photoReducer from "./reducers/photo.reducer";
import AuthReducer from "./reducers/auth.reducer";
import { pedometerReducer } from "./reducers/activity.reducer";
import { persistStore, persistReducer } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// AsyncStorage.clear()
//   .then(() => {
//     console.log("Datos eliminados correctamente");
//   })
//   .catch((error) => {
//     console.error("Error al eliminar los datos:", error);
//   });

const RootReducer = combineReducers({
  brand: brandReducer,
  size: sizeShoesReducer,
  color: colorShoesReducer,
  dataUser: userDataShoesReducer,
  list: ShoeUserListReducer,
  image: photoReducer,
  auth: AuthReducer,
  pedometer: pedometerReducer,
});

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const storePersisted = persistStore(store);

export default createStore(RootReducer, applyMiddleware(thunk));
