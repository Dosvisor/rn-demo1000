import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./companents/DrawerNavigator";

export const AppNavigation = ({ navigation, route }) => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
