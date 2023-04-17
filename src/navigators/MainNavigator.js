import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import TabsNavigator from "./TabsNavigator";

import { EntryUserNavigation } from "./EntryUserNavigation";
import { Alert } from "react-native";

const MainNavigator = () => {
  const isAuth = useSelector((state) => state.auth.userId);
  if (isAuth === undefined) {
    Alert.alert(
      "Registro no valido",
      "Por favor revisa tu datos y vuelve a registrarte"
    );
  }
  return (
    <NavigationContainer>
      {!isAuth ? <EntryUserNavigation /> : <TabsNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
