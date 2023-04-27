import { StyleSheet } from "react-native";
import MainNavigator from "./src/navigators/MainNavigator";
import OnBoarding from "./src/screens/OnBoarding";
import { store, storePersisted } from "./src/store";
import { Provider } from "react-redux";
import { EntryUserNavigation } from "./src/navigators/EntryUserNavigation";

import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={storePersisted}>
          {/* <EntryUserNavigation/> */}
          <MainNavigator />
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
