import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BookedScreen } from "../../screens/BookedScreen";
import { MainStackNavigator } from "./PostScreens";
import { THEME } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      shifting={true}
      barStyle={{ backgroundColor: THEME.MAIN_COLOR }}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Все",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name="ios-albums" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          tabBarLabel: "Избранное",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name="ios-star" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
