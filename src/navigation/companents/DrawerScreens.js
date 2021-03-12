import React from "react";
import { MainScreen } from "../../screens/MainScreen";
import { AboutScreen } from "../../screens/AboutScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabScreens";
import { MainStackNavigator } from "./PostScreens";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
