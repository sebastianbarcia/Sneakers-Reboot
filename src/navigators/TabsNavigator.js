import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  heightPixel
} from "../utils/normalize";
import dataTab from "../data/dataTab";

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {dataTab.map((item) => {
        return (
          <BottomTabs.Screen
            key={item.id}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.tabBarIcon}>
                  {item.name === "Tienda" ? (
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={24}
                      color={focused ? "black" : "#748C94"}
                    />
                  ) : (
                    <Ionicons
                      name={item.icon}
                      size={24}
                      color={focused ? "black" : "#748C94"}
                    />
                  )}
                  <Text style={{ color: focused ? "black" : "#748C94" }}>
                    {item.name}
                  </Text>
                </View>
              ),
            }}
          />
        );
      })}
    </BottomTabs.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  tabBarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  tabBar: {
    height: heightPixel(80),
  },
});
