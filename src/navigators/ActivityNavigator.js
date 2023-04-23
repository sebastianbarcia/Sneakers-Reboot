import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ActivityConfirm from "../screens/ActivityConfirm";
import ActivityHome from "../screens/ActivityHome";
import ShowSneakerItem from "../screens/ShowSneakerItem";
const Stack = createNativeStackNavigator();

const ActivityNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="ActivityHome"
        screenOptions={
          {
           //headerShown:false
          //   headerStyle: {
          //     backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
          //   },
          //  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
          //   headerTitleStyle: {
          //     fontFamily: 'OpenSans_700Bold'
          //   }
        }
      }
    >
      <Stack.Screen
        name="ActivityHome"
        component={ActivityHome}
        options={{
          headerShown:false
         }}
      />
      <Stack.Screen
        name="activityConfirm"
        component={ActivityConfirm}
        options={({ route }) => ({ title: `${route.params.sneaker.item.items.brand} ${route.params.sneaker.item.items.name}`})}
      />
      <Stack.Screen
        name="sneakerItem"
        component={ShowSneakerItem}
        options={{
         title:"Zapatilla escogida"
        }}
      />
    </Stack.Navigator>
  );
};

export default ActivityNavigator;
