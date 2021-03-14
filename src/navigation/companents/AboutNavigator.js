import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AboutScreen } from "../../screens/AboutScreen";
import { Platform } from "react-native";
import { THEME } from "../../theme";

const AboutStack = createStackNavigator();

export const AboutStackNavigator = ({ navigation }) => {
  return (
    <AboutStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
      }}
    >
      <AboutStack.Screen
        name="About"
        options={{ drawerLabel: "kskssk" }}
        component={AboutScreen}
      />
    </AboutStack.Navigator>
  );
};
