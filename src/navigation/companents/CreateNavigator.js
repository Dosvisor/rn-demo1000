import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateScreen } from "../../screens/CreateScreen";
import { Platform } from "react-native";
import { THEME } from "../../theme";

const CreateStack = createStackNavigator();

export const CreateStackNavigator = () => {
  return (
    <CreateStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
      }}
    >
      <CreateStack.Screen name="Create" component={CreateScreen} />
    </CreateStack.Navigator>
  );
};
