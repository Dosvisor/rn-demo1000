import React from "react";
import { Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { THEME } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";

const PostNavigator = createStackNavigator();
const BookedNavigator = createBottomTabNavigator();

function Home() {
  return (
    <PostNavigator.Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={{
        headerTintColor: Platform.OS !== "android" ? "#fff" : THEME.MAIN_COLOR,
        headerStyle: {
          backgroundColor:
            Platform.OS !== "android" ? THEME.MAIN_COLOR : "#fff",
        },
      }}
    >
      <PostNavigator.Screen
        name="Main"
        component={MainScreen}
        options={MainScreen.navigationOptions}
      />

      <PostNavigator.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
    </PostNavigator.Navigator>
  );
}

export const AppNavigation = ({ navigation, route }) => (
  <NavigationContainer>
    <BookedNavigator.Navigator
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
      }}
    >
      <BookedNavigator.Screen
        name="Main"
        component={Home}
        options={{
          tabBarLabel: "Все",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name="ios-albums" size={25} color={color} />
          ),
        }}
      />
      <BookedNavigator.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          tabBarLabel: "Избранное",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name="ios-star" size={25} color={color} />
          ),
        }}
      />
    </BookedNavigator.Navigator>
  </NavigationContainer>
);
