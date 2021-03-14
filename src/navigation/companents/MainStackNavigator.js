import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../../screens/MainScreen";
import { PostScreen } from "../../screens/PostScreen";
import { Platform } from "react-native";
import { THEME } from "../../theme";
import { BookedScreen } from "../../screens/BookedScreen";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={{
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={MainScreen.navigationOptions}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
      <Stack.Screen
        name="Booked"
        component={BookedScreen}
        options={BookedScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
