import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateScreen } from "../../screens/CreateScreen";
import { Platform } from "react-native";
import { THEME } from "../../theme";
import { BookedScreen } from "../../screens/BookedScreen";
import { MainScreen } from "../../screens/MainScreen";

const BookedStack = createStackNavigator();

export const BookedStackNavigator = () => {
  return (
    <BookedStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
      }}
    >
      <BookedStack.Screen name="Booked" component={BookedScreen} />
      <BookedStack.Screen name="Main" component={MainScreen} />
    </BookedStack.Navigator>
  );
};
